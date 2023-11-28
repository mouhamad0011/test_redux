import { combineReducers } from "redux";
import counterReducer from "./reducer";
import loggedReducer from "./logged";
import usersReducer from "./getUsers";
const allReducers = combineReducers({
  counter : counterReducer,
  isLogged : loggedReducer,
  users : usersReducer
});

export default allReducers;
