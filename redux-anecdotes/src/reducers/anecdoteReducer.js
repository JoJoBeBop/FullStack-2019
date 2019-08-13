import anecdoteService from "../services/anecdotes";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data];

    case 'VOTE_ANECDOTE':
      const id = action.data.id;
      const anecdoteToChange = state.find(n => n.id === id);
      console.log(state);
      const changeAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      return state.map(anecdote => anecdote.id !== id ? anecdote : changeAnecdote);

    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state
  }
};

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch ({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    })
  }

};

export const voteAnecdote = (content) => {
  return async dispatch => {
    const newVote = await anecdoteService.newVote(content)
    dispatch({
      type: "VOTE_ANECDOTE",
      data: newVote
    })
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
};


export default anecdoteReducer