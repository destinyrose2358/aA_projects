import React from "react";
import { uniqueId } from "../../util/util";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {this.setState({
      [field]: event.target.value
    })};
  }

  handleSubmit(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo({ todo });
    this.setState({
      title: "",
      body: "",
      done: false
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={ this.update("title") } type="text" value={ this.state.title }/>
        <label htmlFor="body">Body</label>
        <textarea className="todo-form-body" id="body" onChange={ this.update("body") } cols="30" rows="10" value={ this.state.body }></textarea>
        <button>Add Todo</button>
      </form>
    )
  }
}