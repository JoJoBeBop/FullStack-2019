import React from 'react';
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import {createAnecdote, voteAnecdote} from "./reducers/anecdoteReducer";

const App = (props) => {

/*  const anecdotes = props.store.getState()

  const vote = (id) => { props.store.dispatch(voteAnecdote(id)) }*/

  return (
    <div>
      <AnecdoteList store={props.store}/>
      <AnecdoteForm store={props.store}/>
    </div>
  )
};

export default App