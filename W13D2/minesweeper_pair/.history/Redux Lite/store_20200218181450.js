class Store {
  //rootReducer(oldState, action)
  constructor(rootReducer, preloadedState={}) {
    this.rootReducer = rootReducer;
    this.state = preloadedState;
  }

  getState() {
    const dummy = {};
    return Object.assign(this.state, dummy);
  }

  dispatch(action) {
    let key = action.type.split(" ")[1]
    let newState = { [key]: null };

    // let reduced = { [key]: this.rootReducer(this.state, action) };
    let reduced = this.rootReducer(this.state, action);
    Object.assign(newState, this.state)
    Object.assign(newState, reduced)

    this.state = newState;
  }
}

Store.combineReducers = function(reducers) {
  const rootReducer = function(oldState, action) {
    const newState = {};

    for (let key in oldState) {
      const reducer = reducers[key+"s"],
        value = reducer(oldState[key], action);
      newState[key] = value;
    }

    return newState;
  }

  return rootReducer;
  //=> function(oldState, action) {return oldState//newState}
}