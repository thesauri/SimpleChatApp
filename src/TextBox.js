import React, { Component } from 'react';

const styles = {
  display: "flex"
};

const inputStyle = {
  flex: 1
}

class TextBox extends Component {
  render() {
    return (
      <div style={styles}>
        <input style={inputStyle} type="text" />
        <button>Send</button>
      </div>
    );
  }
}

export default TextBox;
