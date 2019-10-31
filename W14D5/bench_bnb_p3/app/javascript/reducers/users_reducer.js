import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action);
      let { id } = action.currentUser;
      return Object.assign({}, state, {
        [id]: action.currentUser
      });
    default:
      return state;
  }
};

export default usersReducer;