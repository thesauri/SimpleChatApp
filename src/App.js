import React, { Component } from 'react';
import ChatList from './ChatList'
import './App.css';

const chatListMock = [
  {
    name: "Chat 1",
    messages: [
      {
        user: "Bob",
        message: "Hello Pete!"
      },
      {
        user: "Pete",
        message: "Hello Bob"
      }
    ]
  },
  {
    name: "Chat 2",
    messages: [
      {
        user: "You",
        message: "Are thou smiling?"
      },
      {
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
      </div>
    );
  }
}

export default App;
