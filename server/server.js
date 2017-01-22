const WebSocket = require("ws");

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

// The chatId property could probably be replace with the chat's index
const chatData = [
  {
    chatId: 0,
    name: "Chat 1",
    messages: [
      {
        id: 0,
        user: "Bob",
        message: "Hello Pete!"
      },
      {
        id: 1,
        user: "Pete",
        message: "Hello Bob"
      }
    ]
  },
  {
    chatId: 1,
    name: "Chat 2",
    messages: [
      {
        id: 2,
        user: "You",
        message: "Are thou smiling?"
      },
      {
        id: 3,
        user: "Mona Lisa",
        message: "😏"
      }
    ]
  }
];

/* Attempts to add a message to the chat data
   Returns whether the message was added or not */
function addMessage(chatId, user, message) {
  if (typeof(chatData[chatId]) === "object") {
    const messageCount = chatData[chatId].messages.length;
    chatData[chatId].messages.push({
      id: messageCount + 1,
      user: user,
      message: message
    });
  }
}

wss.broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const msgObj = JSON.parse(msg);
    if (msgObj.type === "newMessage") {
      addMessage(msgObj.chatId, msgObj.nickname, msgObj.text);
      // Send the new message to all connected clients
      wss.broadcast(msgObj);
    }
  });

  const msg = {
    type: "initial",
    data: chatData
  };
  ws.send(JSON.stringify(msg));
});
