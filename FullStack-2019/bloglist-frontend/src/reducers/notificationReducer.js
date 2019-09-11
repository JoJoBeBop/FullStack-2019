/*
import anecdoteService from "./services/blogs";
*/

const initialState = {};
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.data.message,
        type: action.data.type,
      };
    case "EMPTY_NOTIFICATION":
      return initialState;
    default:
      return state
  }
};

export const setNotification = (data, timeout) => {
  return async dispatch => {
    dispatch({
      type: "SET_NOTIFICATION",
      data
    });

    setTimeout(() => {
      dispatch({
        type: "EMPTY_NOTIFICATION",
      });
    }, timeout * 1000);
  };
};

export const emptyNotification = () => {
  return {
    type: "EMPTY_NOTIFICATION"
  }
};


export default notificationReducer
