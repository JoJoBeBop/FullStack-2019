import React from "react";

import {voteAnecdote} from "../reducers/anecdoteReducer";
import {setNotification, emptyNotification} from "../reducers/notificationReducer";
import { createStore, combineReducers } from 'redux'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.store.dispatch(voteAnecdote(anecdote.id));
    props.store.dispatch(setNotification({message: `Comment: "${anecdote.content}", liked`}))
    setTimeout(() => {
      props.store.dispatch(emptyNotification()) }, 5000)
  };

  const anecdotes = props.store.getState().anecdotes;
  console.log(anecdotes);

  let anecdotesInVoteOrder = anecdotes.sort((acc, cum) => cum.votes.toString().localeCompare(acc.votes))

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotesInVoteOrder.map(anecdote =>
        <div key={anecdote.id} >
          <div>
            {anecdote.content}
          </div>
          <div>
            Votes: {anecdote.votes}
            <br/>
            <button onClick={() => vote(anecdote)}>vote</button>
            <hr/>
          </div>
        </div>
      )}
    </>

  )
}

export default AnecdoteList;