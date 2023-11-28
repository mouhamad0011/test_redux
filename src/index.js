import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from 'redux';
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
   <App/>
  </Provider>,
  document.getElementById("root")
);


