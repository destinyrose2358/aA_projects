import React from 'react';

export default class TodoListItem extends React.Component{
  render() {
    let { todo } = this.props;

    return <li>{ todo.title }</li>;
  }
}