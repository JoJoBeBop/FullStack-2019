import React from "react";
import {voteAnecdote} from "../reducers/anecdoteReducer";

const AnecdoteList = (props) => {
  const vote = (id) => { props.store.dispatch(voteAnecdote(id)) };
  const anecdotes = props.store.getState();

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            Votes: {anecdote.votes}
            <br/>
            <button onClick={() => vote(anecdote.id)}>vote</button>
            <hr/>
          </div>
        </div>
      )}
    </>

  )
}

export default AnecdoteList;