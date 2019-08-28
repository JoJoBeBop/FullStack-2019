import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogsList";
import UserList from "./components/UserList";
import UserSingle from "./components/UserSingle";
import Menu from "./components/Menu";
import BlogSingle from "./components/BlogSingle"

import {initializeBlogs} from "./reducers/blogReducer";
import {initializeUser} from "./reducers/userReducer";
import {setNotification} from "./reducers/notificationReducer";
import BlogForm from "./components/BlogForm";

const App = ({blogs, user, initializeBlogs, initializeUser}) => {


  useEffect(() => {
    initializeUser();
  }, [initializeUser])


  useEffect(() => {
    initializeBlogs()
  }, [initializeBlogs]);

  return (
    <Router>
      <div className="App">
        <Menu/>
        <Notification/>
        <LoginForm/>

        <Route exact path="/" render={() =>
          <div>
            <BlogList/>
          </div>
        }/>

        <Route exact path="/blogs/:id" render={({match}) =>
          <BlogSingle  blogId={match.params.id}/>
        }/>

        <Route exact path="/users" render={() =>
          <UserList/>
        }/>

        <Route exact path="/createNew" render={() =>
          <BlogForm/>
        }/>

        <Route exact path="/users/:id" render={({match}) =>
          <UserSingle userId={match.params.id} />
        }/>

      </div>
    </Router>

  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  }
};

const mapDispatchToProps = {
  setNotification,
  initializeBlogs,
  initializeUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

