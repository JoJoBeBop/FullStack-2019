import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'

import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import {createAnecdote} from "./reducers/anecdoteReducer";
import {setNotification} from "./reducers/notificationReducer";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
});

const store = createStore(reducer);

store.dispatch(createAnecdote('combineReducers forms one reduces from many simple reducers'))
/*
store.dispatch(setNotification('combineReducers forms one reduces from many simple reducers'))
*/




const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
};

render();
store.subscribe(render);