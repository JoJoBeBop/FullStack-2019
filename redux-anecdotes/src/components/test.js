import React from "react";
import {connect} from 'react-redux'

import {voteAnecdote} from "../reducers/anecdoteReducer";
import {emptyNotification} from "../reducers/notificationReducer";
import {setNotification} from "../reducers/notificationReducer";


const AnecdoteList = ({ visibleAnecdotes, voteAnecdote, notificationSet, notificationRemove }) => {
  const vote = anecdote => {
    voteAnecdote(anecdote);
    notificationSet({ message: `You voted "${anecdote.content}"`, type: 'success' }, 5);
  };

  return visibleAnecdotes.map(anecdote => (
    <>
      <h2>Anecdotes</h2>
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
    </>  ));
};

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === '') return sortedAnecdotes(anecdotes);

  const filteredAnecdotes = anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase()),
  );
  return sortedAnecdotes(filteredAnecdotes);
};

const sortedAnecdotes = anecdotes => anecdotes.sort((a, b) => b.votes - a.votes);

const mapStateToProps = state => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
  };
};

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  emptyNotification,
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdoteList);

export default ConnectedAnecdoteList;