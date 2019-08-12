import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import { Provider } from 'react-redux'

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

store.dispatch(createAnecdote('combineReducers forms one reduces from many simple reducers'))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,    document.getElementById('root')
  )
};


/*const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
};*/

render();
store.subscribe(render);