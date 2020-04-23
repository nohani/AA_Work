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
    this.rootReducer(this.state, action)
  }
}

const roleReducer = (oldRole = null, action) => {
  if (action.type === "change role") {
    return action.newRole;
  } else {
    return oldRole;
  }
};

// let reducers = {
//   userReducer: userReducer,
//   roleReducer: roleReducer
// }

// let rootReducer = combineReducers(reducers)
// let store = new Store(rootReducer)
// store.dispatch(action)



// const userReducer = (oldUser = null, action) => {
//   if (action.type === "change user") {
//     return action.newUser;
//   } else {
//     return oldUser;
//   }
// };



// let rootReducer = combineReducers(reducers) //=> function (oldState, action) {...}
// createStore(rootReducer)