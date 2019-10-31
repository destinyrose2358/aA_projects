import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  render() {
    let errors = this.props.errors.map((error, idx) => (
      <p key={ idx }>{error}</p>
    ));
    return (
      <div>
        <ul>
          { errors }
        </ul>
        <form className="session-form" onSubmit={ this.handleSubmit } >
          <label>
            Username:
            <input
              type="text"
              onChange={this.update("username")}
              value={this.state.username}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
            />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}