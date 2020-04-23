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
    Object.assign(this.state, newState)

    let reduced = { [key]: this.rootReducer(this.state, action) }; //reduced = {"role": "Student"}
    Object.assign(reduced, newState)

    this.state = newState;
  }
}

const roleReducer = (oldRole = null, action) => {
  if (action.type === "change role") {
    return action.newRole;
  } else {
    return oldRole;
  }
};

let state = {
  user: "Andy",
  role: "Instructor"
};

const action = {
  type: "change role",
  newRole: "Student"
};

let store = new Store(roleReducer, state);
store.dispatch(action)

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