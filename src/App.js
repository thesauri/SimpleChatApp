import React, { Component } from 'react';
import ChatList from './ChatList'
import './App.css';

const chatListMock = [
  { name: "Chat 1" },
  { name: "Chat 2" },
  { name: "Chat 3" }
]

class App extends Component {
  render() {
    return (
      <div>
        <ChatList />
      </div>
    );
  }
}

export default App;
