import React, { Component } from 'react';
import ChatListItem from './ChatListItem'

const styles = {
  display: "flex"
};

class ChatList extends Component {
  render() {
    const chatListItems = this.props.chats.map((chat) =>
      <ChatListItem key={chat.name} name={chat.name} />
    );
    return (
      <div style={styles}>
        {chatListItems}
      </div>
    );
  }
}

ChatList.propTypes = {
  chats: React.PropTypes.array.isRequired
};

export default ChatList;
