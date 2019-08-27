/*
import React, {useState, useEffect} from "react";
import blogsService from "./services/blogs";

import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import BlogData from "./components/Blog";
import BlogList from "./components/BlogsList";


import { connect } from 'react-redux'
import Test from "./components/Test";

import {initializeBlogs} from "./reducers/blogReducer";
import {initUser} from "./reducers/userReducer";

import {setNotification} from "./reducers/notificationReducer";
import Menu from "./components/Menu";

import {
  BrowserRouter as Router,

} from 'react-router-dom'


const App = ({bloga, initializeBlogs, initUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const [blogs, setBlogs] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    initUser();
  }, [initUser])

  console.log(user);

  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs]);




  /!*    useEffect(() => {
        blogsService
          .getAll()
          .then(initialBlogs => {
            setBlogs(initialBlogs)
          });
      }, []);*!/

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);

      console.log(loggedUserJSON);
      /!*blogsService.setToken(user.token);*!/
    }
  }, []);


  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedBlogappUser");
    window.location.reload(false);
  };

  console.log(window.localStorage);



  /!* LOGIN *!/

  const EntireLoginForm = () => {
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

  /!* BLOG *!/

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
      setNotification({message: `Blog: "${newObject.title}" liked`}, 2)
    } catch (e) {
      setNotification({message: `Error liking: ${e}`}, 2)
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

  const EntireBlogForm = () => {
    if (blogs !== "") {
      return (
        <div>
          <h2>Blogs</h2>
          <h4>Welcome, {user.username}</h4>
          <button onClick={() => logout()}>Logout</button>
          <hr/>
          {createNewBlog()}
          <hr/>

          {/!*          Sorts and shows in order of likes, yes it works
          {blogs.sort(blogsSort).toString}*!/}
          {bloga.map(blog =>
            <BlogData key={blog.id}
                      blog={blog}
                      user={user}
                      handleUpdate={blogUpdateEvent}
                      handleDelete={blogDeleteEvent}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>Empty</div>
      )
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


  console.log(user);
  return (
    <Router>
      <div className="App">

        <Test/>

        <Menu/>
        <Notification />
        {/!*
        <BlogData/>
*!/}




        {/!*
        <BlogList/>
*!/}


        <LoginForm/>
        <BlogList/>

        {/!*
        {user === null ? <LoginForm/> : <BlogList/>}
*!/}

        {/!*        {console.log(window.localStorage)}
        {console.log(user)}*!/}


      </div>
    </Router>

  );
};


/!*const mapStateToProps = (state) => {
  return {
    bloga: toShow(state),
  }
}*!/

const mapStateToProps = state => {
  console.log(state);
  return {
    bloga: state.blogs,
    user: state.user
  }
};


const mapDispatchToProps = {
  setNotification,
  initializeBlogs,
  initUser
};


export default connect(
  mapStateToProps,
  mapDispatchToProps

)(App);

*/
