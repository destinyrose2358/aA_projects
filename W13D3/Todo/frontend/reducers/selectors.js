export const getAllTodos = ({ todos }) => (
	Object.keys(todos).map(id => todos[id])
);

window.getAllTodos = getAllTodos;