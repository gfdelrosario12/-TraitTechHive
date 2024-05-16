// store.js
import { createStore } from 'redux';
import all from "../assets/images/reporters/all.jpg"

// Define the initial state
const initialState = {
  value1: "TEAM",
  value2: all,
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUES':
      return {
        ...state,
        value1: action.payload.value1,
        value2: action.payload.value2,
        value3: action.payload.value3,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
