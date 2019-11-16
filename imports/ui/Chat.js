import React, { Component } from 'react';
import Chats from '../api/chats.js';
import { Session } from 'meteor/session'
import { withTracker } from 'meteor/react-meteor-data';

const Chat = (props) => {
    return (
        <div className="chat">
          <h3 className="user">{props.user}</h3>
          <p className="message">{props.message}</p>
        </div>
    )
}


export default Chat;