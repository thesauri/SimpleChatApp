import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import TextBox from './TextBox';
import './App.css';

const styles = {
  maxWidth: 768,
  margin: "0 auto",
  padding: 20,
  display: "flex",
  flex: 1,
  flexDirection: "column"
};

const chatListMock = [
  {
    chatId: 0,
    name: "Chat 1",
    messages: [
      {
        id: 0,
        user: "Bob",
        message: "Hello Pete!"
      },
      {
        id: 1,
        user: "Pete",
        message: "Hello Bob"
      }
    ]
  },
  {
    chatId: 1,
    name: "Chat 2",
    messages: [
      {
        id: 2,
        user: "You",
        message: "Are thou smiling?"
      },
      {
        id: 3,
        user: "Mona Lisa",
        message: "😏"
      }
    ]
  }
];

class App extends Component {

  render() {
    const chatId = typeof(this.props.params.chatId) !== "undefined" ? this.props.params.chatId : 0;
    return (
      <div style={styles}>
        <ChatList chats={chatListMock} />
        <ChatBox
          name={chatListMock[chatId].name}
          messages={chatListMock[chatId].messages} />
        <TextBox />
      </div>
    );
  }
}

export default App;
