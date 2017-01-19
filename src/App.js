import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import './App.css';

const chatListMock = [
  {
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
    return (
      <div>
        <ChatList chats={chatListMock} />
        <ChatBox name={chatListMock[0].name} messages={chatListMock[0].messages} />
      </div>
    );
  }
}

export default App;
