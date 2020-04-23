class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};
  }

  getState() {
    return this.state;
  }
}