import React from "react";
import {createAnecdote} from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.store.dispatch(createAnecdote(content))
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

export default AnecdoteForm;