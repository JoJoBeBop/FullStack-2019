import React, { useState } from 'react'

const Blog = ({user, blog, handleUpdate, handleDelete}) => {
  const [infoVisible, setInfoVisible]= useState(true);
  const [deleteVisible, setDeleteVisible]= useState(true);


  const blogStyle = {
    borderStyle: "solid",
    borderRadius: 0.5,
    padding: 10,
    marginBottom: 10
  };

  const showInfo = {display: infoVisible ? "none" : ""};
  const showDelete = {display: deleteVisible ? "none" : ""};

  const showFunc = () => {
    infoVisible === true ? setInfoVisible(false) : setInfoVisible(true)
  };

  const checkUserFunc = () => {
    if (user.username === blog.user.username) {
      deleteVisible === true ? setDeleteVisible(false) : setDeleteVisible(true)
      console.log("false");
    }
  };


  return (
    <div style={blogStyle} onClick={() => {showFunc(); checkUserFunc()}} >
      <div >
        <p>{blog.title}, by {blog.author}</p>
      </div>
      <div  style={showInfo}>
        <p style={{cursor: 'pointer'}}>{blog.url}</p>
        <p>{blog.likes} Likes</p><button onClick={() => handleUpdate(blog)}>Like</button>
        <p>Created by, {blog.user.username}</p>
        <button style={showDelete} onClick={() => handleDelete(blog)}>Remove</button>

      </div>
    </div>
  )
};

export default Blog