import React, { Component } from 'react';
import ChatBoxBubble from './ChatBoxBubble';

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  flex: 1
};

class ChatBox extends Component {
  render() {
    const chatBoxBubbles = this.props.messages.map((message) =>
      <ChatBoxBubble key={message.id} user={message.user} message={message.message} />
    );
    return (
      <div style={styles}>
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
