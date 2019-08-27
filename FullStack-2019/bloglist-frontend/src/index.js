import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/*
import { createStore, combineReducers } from 'redux'
*/
import { Provider } from 'react-redux'
import store from "./store"


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

/*
ReactDOM.render(<App />, document.getElementById("root"));*/
