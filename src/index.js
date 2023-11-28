import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(thunk));
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
