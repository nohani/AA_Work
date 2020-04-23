class Store {
  //rootReducer(oldState, action)
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};
  }

  getState() {
    const dummy = {};
    return Object.assign(this.state, dummy);
  }

  dispatch(action) {
    this.rootReducer(this.state, action)
  }
}


// createStore(reducer)
// combineReducers(reducers)


// const roleReducer = (oldRole = null, action) => {
//   if (action.type === "change role") {
//     return action.newRole;
//   } else {
//     return oldRole;
//   }
// };

// const userReducer = (oldUser = null, action) => {
//   if (action.type === "change user") {
//     return action.newUser;
//   } else {
//     return oldUser;
//   }
// };

// let reducers = {
//   userReducer: userReducer,
//   roleReducer: roleReducer
// }

// let rootReducer = combineReducers(reducers) //=> function (oldState, action) {...}
// createStore(rootReducer)