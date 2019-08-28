import React from 'react';
import {connect} from 'react-redux';
import "../index.css";
import { Link } from 'react-router-dom';

const BlogsList = ({blogs, logout, createNewBlog, user }) => {

  const blogStyle = {
    borderStyle: "solid",
    borderRadius: 0.5,
    padding: 10,
    marginBottom: 10
  };

  if (user !== null) {
    return blogs.map(blog => (

      <div style={blogStyle} className="titleAuthor" key={blog.id}>
        <div>
          <Link to={`blogs/${blog.id}`}>{blog.title}, by {blog.author}</Link>
        </div>
      </div>
    ))
  } else {
    return (
      <div>
      </div>
    )
  }

};


const mapStateToProps = state => {
  return {
    notification: state.notification,
    blogs: state.blogs,
    user: state.user
  };
};


const ConnectedBlogsList = connect(
  mapStateToProps, null)(BlogsList);

export default ConnectedBlogsList;
