import React, { Component } from 'react';
import { Link } from 'react-router';

class ChatListItem extends Component {
  render() {
    return (
      <Link to={`/${this.props.chatId}`}>{this.props.name}</Link>
    );
  }
}

ChatListItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  chatId: React.PropTypes.number.isRequired
};

export default ChatListItem;
