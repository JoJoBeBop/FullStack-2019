import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {initializeAnecdotes} from "./reducers/anecdoteReducer";

import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import FilterFrom from "./components/FilterForm"
import Notification from "./components/Notification"

const App = (props) => {
  useEffect(() => {
     props.initializeAnecdotes()
  }, []);

  return (
    <div>
      <FilterFrom />
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
};

export default connect(null, {initializeAnecdotes})(App)
