import React from 'react';
import {connect} from 'react-redux';
import "../index.css";
import {blogUpdate, blogDelete} from "../reducers/blogReducer"


const BlogsList = ({blogs, logout, createNewBlog, blogUpdate, blogDelete, user }) => {

  const blogStyle = {
    borderStyle: "solid",
    borderRadius: 0.5,
    padding: 10,
    marginBottom: 10
  };


  const vote = (blog) => {
    console.log(user);
    blogUpdate(blog)
  };

  const deleteBlog = (blog) => {
    blogDelete(blog)
  };

  if (user !== null) {
    return blogs.map(blog => (

      <div style={blogStyle} className="titleAuthor" key={blog.id}>
        <div>
          <p>{blog.title}, by {blog.author}</p>
        </div>
        <div className="hiddenArea">
          <p>{blog.likes} Likes</p>
          <button onClick={() => vote(blog)}>Like</button>
          <button onClick={() => deleteBlog(blog)}>Delete</button>
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

const mapDispatchToProps = {
  blogUpdate,
  blogDelete
};

const ConnectedBlogsList = connect(
  mapStateToProps, mapDispatchToProps)(BlogsList);

export default ConnectedBlogsList;
