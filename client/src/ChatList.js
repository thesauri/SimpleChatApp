import React, { Component } from 'react';
import ChatListItem from './ChatListItem';

const styles = {
  display: "flex"
};

const addChatStyles = {
  marginLeft: "auto"
};

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChatNameInput: false
    };
  }

  showChatNameInput() {
    this.setState({
      showChatNameInput: true
    });
  }

  hideChatNameInput(e) {
    if (e.target.value !== "") {
      this.props.onNewGroup(e.target.value);
    }
    this.setState({
      showChatNameInput: false
    });
  }

  render() {
    const chatListItems = this.props.chats.map((chat) =>
      <ChatListItem key={chat.name} name={chat.name} chatId={chat.chatId} />
    );
    return (
      <div style={styles}>
        {chatListItems}
        {
          this.state.showChatNameInput &&
          <input type="text" placeholder="Enter chat name"
            onBlur={(e) => this.hideChatNameInput(e)} autoFocus />
        }
        <a style={addChatStyles} href="#" onClick={() => this.showChatNameInput()}>+</a>
      </div>
    );
  }
}

ChatList.propTypes = {
  onNewGroup: React.PropTypes.func.isRequired,
  chats: React.PropTypes.array.isRequired
};

export default ChatList;
