import React, { Component } from 'react';
import Chats from '../api/chats.js';
import { withTracker } from 'meteor/react-meteor-data';

class Channel extends Component {
  handleSubmit(event) {
    event.preventDefault();
    Chats.insert({
      message: event.target[0].value,
      createdAt: new Date()
    });

    event.target[0].value = '';
  }

  renderChats() {
    return this.props.chats.map(chat => {
      return (
        <li key={chat._id}>{chat.message}</li>
      );
    });
  }

  render() {
    return (
      <div className="channel">
        <ul>
          {this.renderChats()}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text"/>
        </form>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('chats');

  return {
    chats: Chats.find({}, { sort: { createdAt: 1 } }).fetch(),
  };
})(Channel);