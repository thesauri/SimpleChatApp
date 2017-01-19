import React, { Component } from 'react';
import ChatBoxBubble from './ChatBoxBubble';

class ChatBox extends Component {
  render() {
    const chatBoxBubbles = this.props.messages.map((message) =>
      <ChatBoxBubble key={message.id} user={message.user} message={message.message} />
    );
    return (
      <div>
        {chatBoxBubbles}
      </div>
    );
  }
}

ChatBox.propTypes = {
  name: React.PropTypes.string.isRequired,
  messages: React.PropTypes.array.isRequired
};

export default ChatBox;
