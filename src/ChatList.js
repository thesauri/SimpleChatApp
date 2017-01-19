import React, { Component } from 'react';
import ChatListItem from './ChatListItem'

const styles = {
  display: "flex"
};

const addChatStyles = {
  marginLeft: "auto"
};

class ChatList extends Component {
  render() {
    const chatListItems = this.props.chats.map((chat) =>
      <ChatListItem key={chat.name} name={chat.name} chatId={chat.chatId} />
    );
    return (
      <div style={styles}>
        {chatListItems}
        <a style={addChatStyles} href="#">+</a>
      </div>
    );
  }
}

ChatList.propTypes = {
  chats: React.PropTypes.array.isRequired
};

export default ChatList;
