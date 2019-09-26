import { connect } from 'react-redux';
import TodoList from './todo_list';
import { getAllTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';


const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);