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