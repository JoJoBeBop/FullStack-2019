import React, {useState, useEffect} from "react";
import blogsService from "./services/blogs";

import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import BlogData from "./components/Blog";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [blogs, setBlogs] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {
    blogsService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      /*blogsService.setToken(user.token);*/
    }
  }, []);

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedBlogappUser");
    window.location.reload(false);

  };

  /* LOGIN */

  const loginForm = () => {
    return (
      <div>
        <h2>Login Application</h2>
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          setUser={setUser}
          setErrorMessage={ setErrorMessage }
        />
      </div>
    );
  };

  /* BLOG */

  const blogEvent = async (event) => {
    event.preventDefault();

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
        setErrorMessage(null);
      }, 5000);
    }
  };

  const blogUpdateEvent = async blog => {
    const newObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1
    };

    try {
      await blogsService.update(blog, newObject);
      console.log("Blog update success", blog);
    } catch (e) {
      console.log("Error liking ", e);
      setErrorMessage("Error liking");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const blogDeleteEvent = async (blog) => {
    try {
      if (window.confirm("Delete blog: " + blog.title + "?")) {
        await blogsService.remove(blog);
        console.log("Deleting success");
      }

    } catch (e) {
      console.log("Error deleting blog ", e);
      setErrorMessage("Error deleting blog");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };


  const blogsSort = (a, b) => {
    const A = a.likes;
    const B = b.likes;
    let comparisonNum = 0;

    if (A > B) {
      comparisonNum = 1;
    } else if (A < B) {
      comparisonNum = -1;
    }
    return comparisonNum;
  };

  /*  const sortedBlodData = () => {

    setBlogs(blogs.sort(blogsSort).toString)

    blogs.map(blog =>
      <BlogData key={blog.id}
                blog={blog}
                handleUpdate={blogUpdateEvent}
      />
    )
  };*/

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

          {/*Sorts and shows in order of likes, yes it works*/}
          {blogs.sort(blogsSort).toString}
          {blogs.map(blog =>
            <BlogData key={blog.id}
                      blog={blog}
                      user={user}
                      handleUpdate={blogUpdateEvent}
                      handleDelete={blogDeleteEvent}
            />
          )}
        </div>
      );
    }
  };

  const createNewBlog = () => {
    return (
      <div>

        <BlogForm
          handleNewTitle={({target}) => setNewTitle(target.value)}
          handleNewAuthor={({target}) => setNewAuthor(target.value)}
          handleNewUrl={({target}) => setNewUrl(target.value)}
          handleSubmit={blogEvent}
        />
      </div>
    );
  };

  return (
    <div className="App">
      {user === null ? loginForm() : blogForm()}
      <Notification message={errorMessage}/>

    </div>
  );
}

export default App;
