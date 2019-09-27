import * as APIUtil from "../util/todo_api_util";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

// export const

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

window.receiveTodos = receiveTodos;

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

window.receiveTodo = receiveTodo;

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)))
);
window.fetchTodos = fetchTodos;
