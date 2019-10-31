import React from 'react';
import { Link } from 'react-router-dom'

export default class Greeting extends React.Component {
  render() {
    let content = (this.props.currentUser ? (
      <div>
        <h1>Welcome, {this.props.currentUser.username}</h1>
        <button onClick={ this.props.logout }>Log Out</button>
      </div>
    ) : (
      <div>
        <Link to = "/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
  )
    )
    return(
      <div>
        { content }
      </div>
    )
  }
}