const Message = require("./Message");

class Chat {
  constructor() {
    // The chatId property could probably be replace with the chat's index
    this.chatData = [
      {
        chatId: 0,
        name: "Chat 1",
        messages: [
          new Message("Bob", "Hello Pete!"),
          new Message("Pete", "Hello Bob")
        ]
      },
      {
        chatId: 1,
        name: "Chat 2",
        messages: [
          new Message("You", "Are thou smiling?"),
          new Message("Mona Lisa", "😏")
        ]
      }
    ];
  }

  /* Attempts to add a message to the chat data
     Returns the new message property if it was created, otherwise null */
  addMessage(chatId, user, message) {
    if (typeof(this.chatData[chatId]) === "object") {
      const newMessage = new Message(user, message);
      this.chatData[chatId].messages.push(newMessage);
      return newMessage;
    } else {
      return null;
    }
  }


}

module.exports = Chat;
