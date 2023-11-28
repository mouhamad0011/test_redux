import { combineReducers } from "redux";
import counterReducer from "./reducer";
import loggedReducer from "./logged";
import testReducer from "./test";
import carsReducer from "./cars";
//import usersReducer from "./getUsers";
const allReducers = combineReducers({
  counter : counterReducer,
  isLogged : loggedReducer,
  test: testReducer,
  cars : carsReducer
 // users : usersReducer
});

export default allReducers;
