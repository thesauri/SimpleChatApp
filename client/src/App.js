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
    this.state = { connected: false };
  }

  componentDidMount() {
    this.ws = new WebSocket("ws://localhost:8080");
    this.ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);

      if (msg.type === "initial") {
        this.setState({
          connected: true,
          chats: msg.data
        });
      }
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    const chatId = typeof(this.props.params.chatId) !== "undefined" ? parseInt(this.props.params.chatId, 10) : 0;
    if (this.state.connected) {
      return (
        <div style={styles}>
          <ChatList chats={this.state.chats} />
          <ChatBox
            name={this.state.chats[chatId].name}
            messages={this.state.chats[chatId].messages} />
          <TextBox />
        </div>
      );
    } else {
      return (<div style={styles}></div>);
    }
  }
}

export default App;
