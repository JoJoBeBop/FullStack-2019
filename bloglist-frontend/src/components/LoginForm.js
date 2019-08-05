import React from "react";
import PropTypes from "prop-types";
import {useField} from "../hooks/index"
import loginService from "../services/login";
import blogsService from "../services/blogs";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  setUser,
  setErrorMessage

}) => {
  const usernameHook = useField('text');
  const passwordHook = useField('text');
  const usernameInput = Object.assign({}, usernameHook);
  const passwordInput = Object.assign({}, passwordHook);

  delete usernameInput.resetInput;
  delete passwordInput.resetInput;

  /*Couldn't make loginEvent in App.js work*/
  const loginEvent = async (event) => {
    event.preventDefault();

    const username = usernameHook.value;
    const password = passwordHook.value;

    try {
      const user = await loginService.login({username, password});
      window.localStorage.setItem(
        "loggedBlogappUser", JSON.stringify(user)
      );

      blogsService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      usernameHook.resetInput();
      passwordHook.resetInput();

      console.log("Logging in: ", username, password);
    } catch (e) {
      console.log("Error logging in ");
      setErrorMessage("Incorrect username or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      <form onSubmit={loginEvent}>
        <div>
          Username
          <br/>
          <input {...usernameInput}/>
        </div>
        <div>
          Password
          <br/>
          <input {...passwordInput}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};


export default LoginForm;