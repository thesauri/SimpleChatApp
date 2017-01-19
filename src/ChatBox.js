import React, { Component } from 'react';

class ChatBox extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ChatBox.propTypes = {
  name: React.PropTypes.string.isRequired,
  messages: React.PropTypes.array.isRequired
};

export default ChatBox;
