import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'

const AnecdoteList = (props) => {
  console.log(props);
  return(
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {props.anecdotes.map(anecdote =>
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>)}
      </ul>
    </div>
  )
};

export default AnecdoteList