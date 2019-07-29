import React, {useState, useEffect, useResource} from 'react'
import loginService from "./services/login"
import Notification from './components/Notification'

/*
import Logins from './components/LoginForm';
*/

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState('')


/*  useEffect(() => {
    loginService
      .getAll()
      .then(initialNotes => setBlogs(initialNotes))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      loginService.setToken(user.token)
    }
  }, [])*/


  const loginEvent = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({username, password});

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      loginService.setToken(user.token);
      console.log("NO");

      setUser(user);
      setUsername("");
      setPassword("");
      console.log("Logging in: ", username, password)

    } catch (e) {
      setErrorMessage("Incorrect username or password");
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  };

/*  const LoginForm = () => {
    if (user === null) {
      return(
        <form onSubmit={loginEvent}>
          <div>
            Username
            <br/>

            <input type="text"
                   value={username}
                   name="Username"
                   onChange={({target}) => setUsername(target.value)}/>
          </div>
          <div>
            Password
            <br/>

            <input type="text"
                   value={password}
                   name="password"
                   onChange={({target}) => setPassword(target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
      )
    }
  };*/

  const loginForm = () => {
    return(
      <form onSubmit={loginEvent}>
        <div>
          Username
          <br/>

          <input type="text"
                 value={username}
                 name="Username"
                 onChange={({target}) => setUsername(target.value)}/>
        </div>
        <div>
          Password
          <br/>

          <input type="text"
                 value={password}
                 name="password"
                 onChange={({target}) => setPassword(target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }

  const blogForm = () => {
    return (
      <div>
        <h2>Welcome, User</h2>
        <h2>Blogs</h2>
        {/*          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}*/}
        )}
      </div>
    )
  }

  const BlogForm = () => {
    if (user !== null) {
      return (
        <div>
          <h2>Welcome, User</h2>
          <h2>Blogs</h2>
          {/*          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog}/>
          )}*/}
          )}
        </div>
      )
    } else {
      return(
        <React.Fragment/>
      )
    }

  };

  const bloggy = () => {
    if (user === null) {
      return (
        <div>
          <h2>Log in to application</h2>
          <form onSubmit={loginEvent}>
            <div>
              Username
              <br/>

              <input type="text"
                     value={username}
                     name="Username"
                     onChange={({target}) => setUsername(target.value)}/>
            </div>
            <div>
              Password
              <br/>

              <input type="text"
                     value={password}
                     name="password"
                     onChange={({target}) => setPassword(target.value)}/>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )
    }

    return (
      <div>
        <h2>blogs</h2>
{/*        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}*/}
      </div>
    )

  };



  return (
    <div className="App">
      <div>
        <h2>Login Application</h2>
      </div>

      {bloggy()}

{/*
      {user === null ? loginForm() : blogForm()}
*/}

{/*      <LoginForm user={user}/>
      <BlogForm/>*/}



      <Notification message={errorMessage}/>

    </div>
  );
}

export default App;
