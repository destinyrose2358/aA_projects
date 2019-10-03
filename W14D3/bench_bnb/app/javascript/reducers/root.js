// Example state
//{
//   entities: {
//     users: {
//       1: {
//         id: 1,
//           username: 'breakfast'
//       }
//     }
//   },
//   session: {
//     id: 1
//   },
//   errors: {
//     session: []
//   }
// }
import { combineReducers } from 'redux';
//import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
//import errorsReducer from './errors_reducer';


export default combineReducers({
  entities: null,
  session: sessionReducer,
  errors: null,
});
