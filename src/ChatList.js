import React, { Component } from 'react';
import ChatListItem from './ChatListItem'

class ChatList extends Component {
  render() {
    const chatListItems = this.props.chats.map((chat) => <ChatListItem name={chat.name} />);
    return (
      <div>
        {chatListItems}
      </div>
    );
  }
}

ChatList.propTypes = {
  chats: React.PropTypes.array.isRequired
};

export default ChatList;
