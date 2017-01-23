const MessageModel = require("./MessageModel");

class ChatModel {
  constructor() {
    // The chatId property could probably be replace with the chat's index
    this.chatData = [
      {
        chatId: 0,
        name: "Chat 1",
        messages: [
          new MessageModel("Bob", "Hello Pete!"),
          new MessageModel("Pete", "Hello Bob")
        ]
      },
      {
        chatId: 1,
        name: "Chat 2",
        messages: [
          new MessageModel("You", "Are thou smiling?"),
          new MessageModel("Mona Lisa", "😏")
        ]
      }
    ];
  }

  /* Attempts to add a message to the chat data
     Returns whether the message was added or not */
  addMessage(chatId, user, message) {
    if (typeof(this.chatData[chatId]) === "object") {
      this.chatData[chatId].messages.push(new MessageModel(user, message));
      return true;
    } else {
      return false;
    }
  }


}

module.exports = ChatModel;
