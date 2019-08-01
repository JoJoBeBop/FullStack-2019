import React from 'react'
import PropTypes from "prop-types";


const LoginForm = ({
                     handleSubmit,
                     handleUsernameChange,
                     handlePasswordChange,
                     username,
                     password
                   }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <br/>
          <input type="text"
                 value={username}
                 name="Username"
                 onChange={handleUsernameChange}/>
        </div>
        <div>
          Password
          <br/>
          <input type="text"
                 value={password}
                 name="password"
                 onChange={handlePasswordChange}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm