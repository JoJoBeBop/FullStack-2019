import React from 'react';
import {connect} from "react-redux";
import {blogDelete, blogUpdate} from "../reducers/blogReducer";
import CommentFrom from "../components/CommentFrom"



const BlogSingle = ({blog, blogUpdate, blogDelete}) => {

  const vote = (blog) => {
    blogUpdate(blog)
  };

  const deleteBlog = (blog) => {
    blogDelete(blog)
  };

  if (blog !== undefined) {
    return(
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.url}</p>
        <p>{blog.likes} likes</p>
        <button onClick={() => vote(blog)}>Like</button>
        <button onClick={() => deleteBlog(blog)}>Delete</button>
        <p>Added by {blog.user.username}</p>
        <CommentFrom blog={blog}/>
      </div>
    )
  }

  return (
    <div>
    </div>
  );
};

const blogsToShow = (blogs, id) => {
  return blogs.find(blog => blog.id === id);

};

const mapStateToProps = (state, blogId) => {
  return {
    blog: blogsToShow(state.blogs, blogId.blogId)
  }

};

const mapDispatchToProps = {
  blogUpdate,
  blogDelete
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogSingle);
