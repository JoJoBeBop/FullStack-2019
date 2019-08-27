import React from "react";
import {useField} from "../hooks/index"

import {setNotification} from "../reducers/notificationReducer";
import {loginUser, logoutUser} from "../reducers/userReducer";


import {connect} from "react-redux";


const LoginForm = ({
                     username,
                     password,
                     setUsername,
                     setPassword,
                     setNotification,
                     user,
                     loginUser,
                     logoutUser

                   }) => {
  const usernameHook = useField('text');
  const passwordHook = useField('text');
  const usernameInput = Object.assign({}, usernameHook);
  const passwordInput = Object.assign({}, passwordHook);

  delete usernameInput.resetInput;
  delete passwordInput.resetInput;

  const loginEvent = async (event) => {
    event.preventDefault();

    const username = usernameHook.value;
    const password = passwordHook.value;

    try {
      await loginUser({
        username,
        password,
      });
    } catch (e) {
      setNotification({message: `Incorrect username or password`}, 2);
      console.log(e);
    }
  }


  const logout = () => {
    console.log(user);

    logoutUser()
  };

  if (user !== null){
    return (
      <div>
        <h2>Logged in as {user.username}</h2>
        <button onClick={logout}>Logout</button>
        <hr/>
      </div>
    );
  }



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


const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setNotification,
  loginUser,
  logoutUser,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

