import React from 'react'

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
}

export default LoginForm