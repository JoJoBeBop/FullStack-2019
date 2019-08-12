import React from "react";
import {connect} from 'react-redux'

import {voteAnecdote} from "../reducers/anecdoteReducer";
import {emptyNotification} from "../reducers/notificationReducer";
import {setNotification} from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  console.log(props);
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote.id);
    props.setNotification({message: `Comment: "${anecdote.content}", liked`})
    setTimeout(() => {
      props.emptyNotification()
    }, 5000)
  };

  return props.anecdotes.map(anecdote => (
    <div key={anecdote.id}>
      <h2>Anecdotes</h2>
      <div>
        {anecdote.content}
      </div>
      <div>
        Votes: {anecdote.votes}
        <br/>
        <button onClick={() => vote(anecdote)}>Vote</button>
        <hr/>
      </div>
    </div>
  ));
};

const shownAnecdotes = ({anecdotes, filter}) => {
  if (filter.filtered === undefined) {
    return voteOrder(anecdotes)
  } else {
    return voteOrder(filter.filtered);
  }
};

const voteOrder = (value) => {
  return value.sort((acc, cum) => cum.votes.toString().localeCompare(acc.votes))
};

const mapStateToProps = state => {
  console.log(state);
  return {
    anecdotes: shownAnecdotes(state),
    filter: state.filter
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