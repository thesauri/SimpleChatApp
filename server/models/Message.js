let messageCount = 0;

class Message {
  constructor(user, message) {
    this.id = messageCount + 1;
    this.user = user;
    this.message = message;
    messageCount += 1;
  }
}

module.exports = Message;
