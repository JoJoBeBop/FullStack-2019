import React, {useState, useEffect, useResource} from 'react'
import blogsService from "./services/blogs"
import loginService from "./services/login"
import Notification from './components/Notification'

import LoginForm from './components/LoginForm'
import BlogForm from "./components/BlogForm";
import BlogData from "./components/Blog"


/*
import Logins from './components/LoginForm';
*/

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loginVisible, setLoginVisible] = useState(false)

  const [newBlog, setNewBlog] = useState("")
  const [blogs, setBlogs] = useState("");
  /*
    const newTitle = useField('text');
    const newAuthor = useField('text');
    const newUrl = useField('text');
    */

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");


  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    console.log("shit");
    blogsService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, []);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('loggedNoteappUser')
    window.location.reload(false);
    console.log(user)

  };

  /* LOGIN */

  const loginEvent = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({username, password});
      console.log(user);


      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      );

      blogsService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      console.log("Logging in: ", username, password)

    } catch (e) {

      console.log("Error logging in ");
      setErrorMessage("Incorrect username or password");
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  };

  const loginForm = () => {
    return (
      <div>
        <h2>Login Application</h2>
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({target}) => setUsername(target.value)}
          handlePasswordChange={({target}) => setPassword(target.value)}
          handleSubmit={loginEvent}

        />
      </div>
    )
  }

  /* BLOG */
  const blogEvent = async (event) => {
    event.preventDefault();
    console.log(newTitle);

    const newObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl
    };
    console.log("new obj", newObject);

    try {
      console.log(user);
      const blogUpload = await blogsService.create(newObject);
      setBlogs(blogs.concat(blogUpload));

      setNewTitle("");
      setNewAuthor("");
      setNewUrl("");

      console.log("Blog upload success");
    } catch (e) {
      console.log("Error posting blog ", e);
      setErrorMessage("Error posting blog");
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }

  };

  const blogForm = () => {
    if (blogs !== "") {
      return (
        <div>
          <h2>Blogs</h2>
          <h4>Welcome, {user.username}</h4>
          <button onClick={() => logout()}>Logout</button>
          <hr/>
          {createNewBlog()}
          <hr/>

          {blogs.map(blog =>
            <BlogData key={blog.id} blog={blog}/>
          )}
        </div>
      )
    }
  };

  const Blog = (blog) => {
    return (
      <div>
        <p>{blog.blog.title}, by {blog.blog.author}</p>
      </div>
    )
  };

  const createNewBlog = () => {
    return (
      <div>

        <BlogForm
          handleNewTitle={({ target }) => setNewTitle(target.value)}
          handleNewAuthor={({ target }) => setNewAuthor(target.value)}
          handleNewUrl={({ target }) => setNewUrl(target.value)}
          handleSubmit={blogEvent}
        />
      </div>
    )
  };


  const addBlog = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
      {user === null ? loginForm() : blogForm()}
      <Notification message={errorMessage}/>

    </div>
  );
}

export default App;
