import React, { useState } from 'react'
import Style from "../index.css"

const Blog = ({blog}) => {
  const [infoVisible, setInfoVisible]= useState(true);

  const blogStyle = {
    borderStyle: "solid",
    borderRadius: 0.5,
    padding: 10,
    marginBottom: 10
  };

  const show = {display: infoVisible ? "none" : ""};
  const showFunc = () => {
    infoVisible === true ? setInfoVisible(false) : setInfoVisible(true)
  };

  console.log(blog);



  return (
    <div style={blogStyle} onClick={() => showFunc()}>
      <div >
        <p>{blog.title}, by {blog.author}</p>
      </div>
      <div  style={show}>
        <p style={{cursor: 'pointer'}}>{blog.url}</p>
{/*
        <p><Link to"google.com">Lol</Link></p>
*/}
        <p>0 Likes</p><button>Like</button>
        <p>Created by, {blog.user.username}</p>

      </div>
    </div>
  )
};

export default Blog