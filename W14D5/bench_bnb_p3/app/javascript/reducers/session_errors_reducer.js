import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/session_actions.js';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
}