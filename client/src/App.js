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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      user: "User"
    };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:8080");
    this.ws.onmessage = (e) => this.handleWebSocketMessage(e);
  }

  handleWebSocketMessage(e) {
    const msg = JSON.parse(e.data);

    switch (msg.type) {
      case "initial":
        this.setState({
          connected: true,
          chats: msg.data
        });
        break;

      case "newMessage":
        const newChats = this.state.chats;
        newChats[msg.chatId].messages.push({
          id: msg.id,
          user: msg.user,
          message: msg.text
        });
        this.setState({
          chats: newChats
        });
        break;

      default:
        console.error("Unknown message type: " + msg.type);
    }
  }

  /* Returns the ID of the current chat. If a chat is defined in the URL (e.g. /1)
     that value will be used, otherwise it will default to 0
     This data should perhaps be set in the state instead.. */
  chatId() {
    return typeof(this.props.params.chatId) !== "undefined" ? parseInt(this.props.params.chatId, 10) : 0;
  }

  // Sends a message to the current chat
  sendMessage(text) {
    const msg = {
      type: "newMessage",
      chatId: this.chatId(),
      user: this.state.user,
      text: text
    };
    this.ws.send(JSON.stringify(msg));
  }

  // Requests the server to create a new group with the desired name
  createChatGroup(name) {
    const msg = {
      type: "newGroup",
      name: name
    };
    this.ws.send(JSON.stringify(msg));
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    if (this.state.connected) {
      return (
        <div style={styles}>
          <ChatList chats={this.state.chats} onNewGroup={(name) => this.createChatGroup(name)}/>
          <ChatBox
            name={this.state.chats[this.chatId()].name}
            messages={this.state.chats[this.chatId()].messages} />
          <TextBox onSendMessage={(text) => this.sendMessage(text)} />
        </div>
      );
    } else {
      return (<div style={styles}></div>);
    }
  }
}

export default App;
