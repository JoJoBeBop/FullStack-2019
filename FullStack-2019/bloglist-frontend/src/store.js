import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

/*import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'*/
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'



const reducer = combineReducers({
/*  anecdotes: anecdoteReducer,
  filter: filterReducer,*/
  blogs: blogReducer,
  notification: notificationReducer,
  user: userReducer

})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
