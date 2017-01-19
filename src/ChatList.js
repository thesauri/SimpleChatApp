import React, { Component } from 'react';
import ChatListItem from './ChatListItem'

class ChatList extends Component {
  render() {
    return (
      <ChatListItem />
    );
  }
}

ChatList.propTypes = {
  chats: React.PropTypes.array.isRequired
}

export default ChatList;
