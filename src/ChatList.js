import React, { Component } from 'react';
import ChatListItem from './ChatListItem';
import { Link } from 'react-router'

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
        { this.props.newChat && <input type="text" autoFocus placeholder="Enter chat name" /> }
        <Link style={addChatStyles} to={`/${this.props.currentChat}/new`}>+</Link>
      </div>
    );
  }
}

ChatList.propTypes = {
  currentChat: React.PropTypes.number.isRequired,
  chats: React.PropTypes.array.isRequired,
  newChat: React.PropTypes.bool.isRequired
};

export default ChatList;
