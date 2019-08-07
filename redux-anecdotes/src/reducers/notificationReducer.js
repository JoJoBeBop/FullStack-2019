const notificationReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return {
        message: action.data.message,
        type: action.data.type,
  }
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

export default notificationReducer