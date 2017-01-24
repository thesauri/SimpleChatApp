const WebSocket = require("ws");
const ChatModel = require("./models/ChatModel");

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

const chat = new ChatModel();

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
      const newMessage = chat.addMessage(msgObj.chatId, msgObj.user, msgObj.text);
      if (newMessage !== null) {
        const newMsg = {
          type: "newMessage",
          chatId: msgObj.chatId,
          id: newMessage.id,
          user: msgObj.user,
          text: msgObj.text
        };
        wss.broadcast(JSON.stringify(newMsg));
      } else {
        console.error("Unable to add message: " + msg);
      }
    }
  });

  const msg = {
    type: "initial",
    data: chat.chatData
  };
  ws.send(JSON.stringify(msg));
});
