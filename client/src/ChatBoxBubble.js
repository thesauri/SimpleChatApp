import React, { Component } from 'react';

class ChatBoxBubble extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user}</h1>
        {this.props.message}
      </div>
    );
  }
}

ChatBoxBubble.propTypes = {
  user: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired
};

export default ChatBoxBubble;
