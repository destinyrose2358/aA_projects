export default class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  getState() {
    return Object.assign({}, this.state);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
  }
}