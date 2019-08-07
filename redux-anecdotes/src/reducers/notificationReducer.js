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

export const setNotification = (data) => {
  console.log(data);
  return {
    type: "SET_NOTIFICATION",
    data
  }
};

export const emptyNotification = () => {
  return {
    type: "EMPTY_NOTIFICATION"
  }
};


export default notificationReducer