import { connect } from 'react-redux';
import TodoList from './todo_list';
import { getAllTodos } from '../../reducers/selectors';
import { receiveTodo, fetchTodos, createTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = dispatch => {
  debugger;
  return {
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchTodos: todos => dispatch(fetchTodos(todos)),
  createTodo: todo => dispatch(createTodo(todo))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);