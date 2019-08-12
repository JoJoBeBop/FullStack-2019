const initialState = {};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_STATE":
      const anecdotes = action.anecdotes;
      let filtered = action.value;
      const filteredAnecdotes = anecdotes.filter(anecdote => (
        anecdote.content.toLowerCase().includes(filtered.toLowerCase())
      ));

      return  {
        filtered: filteredAnecdotes,
        type: action.type,
      };
    default:
      return state
  }
};

export const filterState = (value, anecdotes) => {
  return{
    type: "FILTER_STATE",
    value,
    anecdotes
  }
};

export default filterReducer
