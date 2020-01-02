import React from "react";
import {useField} from "../hooks/index"
import {connect} from "react-redux";
import { Form, Button } from 'semantic-ui-react'

import {setNotification} from "../reducers/notificationReducer";
import {loginUser, logoutUser} from "../reducers/userReducer";

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

      setNotification({message: `Welcome, ${username}!`}, 2)
    } catch (e) {
      setNotification({message: `Incorrect username or password`}, 12);
      console.log(e);
    }
  };


  const logout = () => {
    console.log(user);

    logoutUser()
  };

  if (user !== null){
    return (
      <div>
        <h2>Logged in as {user.username}</h2>
        <button class="ui button" onClick={logout}>Logout</button>
        <hr/>

{/*        <Message success>
          {message}
        </Message>*/}
      </div>
    );
  }



  return (
      <Form onSubmit={loginEvent} class="ui input">
        <Form.Field>
          <label>Username</label>
          <input {...usernameInput} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input {...passwordInput} />
        </Form.Field>
        <button class="ui button" type='submit'>Login</button>
        <hr/>
      </Form>
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

