const WebSocket = require("ws");

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

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

wss.on("connection", (ws) => {
  console.log("Connection!");
  const msg = {
    type: "initial",
    data: chatData
  };
  ws.send(JSON.stringify(msg));
});
