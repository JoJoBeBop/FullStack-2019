import React from 'react';

const Anecdote = ({anecdote}) => {
  console.log(anecdote);
  return(
    <div>
      <h2>{anecdote.content}</h2>
      <div>Has {anecdote.votes} Votes</div>
      <div>See More At:
        <a href={anecdote.info}> {anecdote.info}</a>
      </div>
      <br/>
    </div>
  )
};

export default Anecdote