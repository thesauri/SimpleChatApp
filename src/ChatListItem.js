import React, { Component } from 'react';

class ChatListItem extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

ChatListItem.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default ChatListItem;
