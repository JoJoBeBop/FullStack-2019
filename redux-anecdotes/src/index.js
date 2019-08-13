import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from "./store"

/*import { createStore, combineReducers } from 'redux'
import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import {createAnecdote} from "./reducers/anecdoteReducer";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
});

const store = createStore(reducer);

store.dispatch(createAnecdote('combineReducers forms one reduces from many simple reducers'))*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))