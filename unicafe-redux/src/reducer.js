const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

const counterReducer = (state = initialState, action) => {
  let changeState;
  switch (action.type) {
    case 'GOOD':
      changeState = {
        ...state,
        good: state.good + 1
      };
      return changeState;
    case 'OK':
      changeState = {
        ...state,
        ok: state.ok + 1
      };
      return changeState;
    case 'BAD':
      changeState = {
        ...state,
        bad: state.bad + 1
      };
      return changeState;
    case 'ZERO':
      changeState = {
        ...state,
        good: state.good === 0,
        ok: state.ok === 0,
        bad: state.bad === 0
      };
      return changeState;
      default:
      return state
  }

};

export default counterReducer