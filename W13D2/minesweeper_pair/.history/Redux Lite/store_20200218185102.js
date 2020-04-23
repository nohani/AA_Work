class Store {
  //rootReducer(oldState, action)
  constructor(rootReducer, preloadedState={}) {
    this.rootReducer = rootReducer;
    this.state = preloadedState;
    this.subscriptions = [];
  }

  getState() {
    const dummy = {};
    return Object.assign(this.state, dummy);
  }

  dispatch(action) {
    // let key = action.type.split(" ")[1]
    let newState = { };

    let reduced = this.rootReducer(this.state, action);
    Object.assign(newState, this.state)
    Object.assign(newState, reduced)

    this.state = newState;
  }
}

Store.combineReducers = function(reducers) {
  const rootReducer = function(oldState, action) {
    const newState = {};

    for (let key in reducers) {
      const reducer = reducers[key],
        value = reducer(oldState[key], action);
      newState[key] = value;
    }

    return newState;
  }

  return rootReducer;
}