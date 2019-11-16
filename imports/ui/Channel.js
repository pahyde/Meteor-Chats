import React, { Component } from 'react';
import Chats from '../api/chats.js';
import { Session } from 'meteor/session'
import { withTracker } from 'meteor/react-meteor-data';
import Chat from './Chat.js';

class Channel extends Component {
  handleSubmit(event) {
    event.preventDefault();
    Chats.insert({
      message: event.target[0].value,
      user: Session.get('username'),
      createdAt: new Date()
    });
    event.target[0].value = '';
  }

  renderChats() {
    return this.props.chats.map(chat => {
      return (
        <Chat key={chat._id} user={chat.user} message={chat.message}/>
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
            <input type="text" className="submit-chat"/>
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