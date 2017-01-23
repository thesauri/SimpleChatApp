class ChatModel {
  constructor() {
    // The chatId property could probably be replace with the chat's index
    this.chatData = [
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
  }

  /* Attempts to add a message to the chat data
     Returns whether the message was added or not */
  addMessage(chatId, user, message) {
    if (typeof(chatData[chatId]) === "object") {
      const messageCount = chatData[chatId].messages.length;
      chatData[chatId].messages.push({
        id: messageCount + 1,
        user: user,
        message: message
      });
      return true;
    } else {
      return false;
    }
  }


}

module.exports = ChatModel;
