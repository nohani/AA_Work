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

    let reduced = this.rootReducer(this.state, action, this.subscriptions);
    Object.assign(newState, this.state)
    Object.assign(newState, reduced)

    this.state = newState;
  }

  subscribe(cb) {
    this.subscriptions.push(cb);
  }
}


Store.combineReducers = function(reducers) {
  const rootReducer = function(oldState, action, subscriptions) {
    const newState = {};

    for (let key in reducers) {
      const reducer = reducers[key];
      const value = reducer(oldState[key], action);

      newState[key] = value;
    }

    for (let key in newState) {
      if (newState[key] !== oldState[key]) {
        subscriptions.forEach( cb => { cb(newState) });
        break;
      }
    }

    return newState;
  }

  return rootReducer;
}