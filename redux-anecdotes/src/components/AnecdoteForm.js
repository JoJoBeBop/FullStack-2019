import React from "react";

import {createAnecdote} from "../reducers/anecdoteReducer";
import {connect} from "react-redux";
import anecdoteService from "../services/anecdotes";


const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content)
  };

  return (
    <>
      <h2>Create A New Anecdote</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote"/>
        <button type="submit">Create</button>
      </form>
    </>
  )

};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
};

const mapsDispatchToProps = {
  createAnecdote
};

const ConnectedAnecdoteForm = connect(mapStateToProps, mapsDispatchToProps)(AnecdoteForm);
export default ConnectedAnecdoteForm

