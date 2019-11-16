import React, { Component } from 'react';
import { Session } from 'meteor/session'
import Channel from './Channel.js';


class App extends Component {
  state = {
    modal: true
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({modal: false});
    Session.set('username', event.target[0].value);
  }

  render() {
    return (
      <div>
        <div className={this.state.modal ? "overlay" : "hidden"}>
          <form 
             className="username-form"
             onSubmit={this.handleSubmit.bind(this)}
           >
            <label className="username-dir">Enter a username:</label>
            <div className="user-in">
              <input className="username-input"/>
              <input className="post-submit" type="submit" value="Start Chatting!"></input>
            </div>
          </form>
        </div>
        <h1 className="header">Meteor Chats</h1>
        <Channel />
      </div>
    );
  }

}

export default App;
