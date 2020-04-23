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

  combineReducers(reducers) {
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
}







// let state = {
//   user: "Andy",
//   role: "Instructor"
// };

// const action = {
//   type: "change role",
//   newRole: "Student"
// };

// let store = new Store(roleReducer, state);
// store.dispatch(action)


const roleReducer = (oldRole = null, action) => {
  if (action.type === "change role") {
    return action.newRole;
  } else {
    return oldRole;
  }
};


const userReducer = (oldUser = null, action) => {
  if (action.type === "change user") {
    return action.newUser;
  } else {
    return oldUser;
  }
};
// let reducers = {
//   users: userReducer,
//   roles: roleReducer
// }


let rootReducer = Store.combineReducers(reducers)
let store = new Store(rootReducer)
store.dispatch(action)



// let rootReducer = combineReducers(reducers) //=> function (oldState, action) {...}
// createStore(rootReducer)