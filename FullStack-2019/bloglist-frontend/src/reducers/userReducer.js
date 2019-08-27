import userService from "../services/login"
const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_USER":
      return action.data;

    case "LOGOUT_USER":
      return initialState;

    case "GET_USERS":
      console.log("re");

      console.log(action.data);
      return action.data;

    default:
      return state;
  }
};

export const initializeUser = () => {
  return async dispatch => {
    const storageUser = window.localStorage.getItem("loggedBlogUser");
    if (storageUser !== null) {
      const initializedUser = JSON.parse(storageUser);
      setUserFromStorage(initializedUser);
      dispatch({
        type: "INIT_USER",
        data: initializedUser,
      });
    }
  };
};

export const loginUser = (credentials) => {
  return async dispatch => {
    const userData = await userService.login(credentials);
    dispatch({
      type: "INIT_USER",
      data: userData,
    });
    window.localStorage.setItem('loggedBlogUser', JSON.stringify(userData));
  };
};

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: "LOGOUT_USER"
    })
  }
};

export const setUserFromStorage = (user) => {
  return async dispatch => {
    dispatch({
      type: "INIT_USER",
      data: user,
    });
  };
};


export const getUsers = () => {

  return async dispatch => {

    console.log("re");
    const allUsers = userService.getAllUsers();
    console.log(allUsers);
    dispatch({
      type: "GET_USERS",
      data: allUsers
    })
  }
}
export default userReducer