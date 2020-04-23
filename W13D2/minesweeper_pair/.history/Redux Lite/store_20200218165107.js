class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};
  }

  getState() {
    const dummy = {};
    return Object.assign(this.state);
  }
}