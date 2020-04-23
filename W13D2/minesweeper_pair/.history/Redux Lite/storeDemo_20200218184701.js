// 
// EXAMPLE 1
// 

let state = {
  user: "Andy",
  role: "Instructor"
};

const action = {
  type: "change role",
  newRole: "Student"
};

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

let reducers = {
  users: userReducer,
  roles: roleReducer
}

let rootReducer = Store.combineReducers(reducers)
let store = new Store(rootReducer, state)
store.dispatch(action)


// 
// EXAMPLE 2
// 

const myNoiseReducer = (prevState = "peace and quiet", action) => {
  switch(action.type) {
    case "noisy action":
      return action.noise;
    default:
      return prevState;
  }
};

const myNoisyAction = {
  type: "noisy action",
  noise: "Car alarm"
};

const myInconsequentialAction = {
  type: "a type no one cares about",
  data: {
    thisThing: "will not get used anyway"
  }
};

const myInitialState = {
  noise: "peace and quiet"
};

const myRootReducer = Store.combineReducers({
  noise: myNoiseReducer,
});

let newState = myRootReducer(myInitialState, myInconsequentialAction);
// => { noise: "peace and quiet" }

newState = myRootReducer(newState, myNoisyAction)
// => { noise: "Car alarm" }

myRootReducer(newState, myInconsequentialAction)
// => { noise: "Car alarm" }


// 
// EXAMPLE 3
// 

// define a reducer for user:
const userReducer = (oldUser = null, action) => {
  if (action.type === "new user") {
    return action.user;
  }
  return oldUser;
};

// create a rootReducer:
const rootReducer = Store.combineReducers({
  user: userReducer
});

// create a store using the rootReducer:
const store = new Store(rootReducer);

// get the state:
store.getState(); // => {}

// invoke the dispatch function to update the user key:
const action = {
  type: "new user",
  user: "Jeffrey Fiddler"
};

store.dispatch(action);
store.getState(); // => { user: "Jeffrey Fiddler" }
