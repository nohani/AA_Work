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



// 
// EXAMPLE 4
// 


const actionCreator1 = value => ({
  type: "add",
  value
});

const actionCreator2 = value => ({
  type: "subtract",
  value
});

const actionCreator3 = value => ({
  type: "no change",
  value
});



const numberReducer = (num = 0, action) => {
  switch(action.type) {
    case "add":
      return num + action.value;
    case "subtract":
      return num - action.value;
    default:
      return num;
  }
}

// numberReducer(5, {type: "add", value: 1}) //=> 6


const rootReducer = Store.combineReducers({
  number: numberReducer
});

const store = new Store(rootReducer);

store.getState() // => { }

const announceStateChange = nextState => {
  console.log(`That action changed the state! Number is now ${nextState.number}`);
}

store.subscribe(announceStateChange);

store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 5"
store.dispatch(actionCreator1(5)); // => "That action changed the state! Number is now 10"
store.dispatch(actionCreator2(7)); // => "That action changed the state! Number is now 3"
store.dispatch(actionCreator3(7)); // => Nothing should happen! The reducer doesn't do anything for type "no change"
store.dispatch(actionCreator1(0)) // => Nothing should happen here either. Even though the reducer checks for the "add" action type, adding 0 to the number won't result in a state change.

store.getState(); // => { number: 3 }