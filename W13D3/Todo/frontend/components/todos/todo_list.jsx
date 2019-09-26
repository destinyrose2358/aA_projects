import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export default class TodoList extends React.Component {
  render() {
    let TodoLis = this.props.todos.map((todo) => {
      return <TodoListItem key={ todo.id } todo={ todo } />; //<li key={ todo.id }>{ todo.title }</li>;
    });
    return (
      <div>
        <ul>
          {TodoLis} 
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} />
      </div>
    );
  }
}