import React, { Component } from 'react';

const styles = {
  display: "flex"
};

const inputStyle = {
  flex: 1
}

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  textChanged(e) {
    this.setState({
      text: e.target.value
    });
  }

  sendMessage(e) {
    e.preventDefault();
    this.setState({
      text: ""
    });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <form style={styles} onSubmit={(e) => this.sendMessage(e)}>
        <input style={inputStyle} type="text" onChange={(e) => this.textChanged(e)}
          value={this.state.text} autoFocus />
        <button type="submit">
          Send
        </button>
      </form>
    );
  }
}

TextBox.propTypes = {
  onSendMessage: React.PropTypes.func.isRequired
}

export default TextBox;
