import React, { useState } from "react";
import {useField} from "../hooks/index"
import {createBlog} from "../reducers/blogReducer";
import {connect} from "react-redux";
import {setNotification} from "../reducers/notificationReducer";





const BlogForm = () => {

  const titleHook = useField('text');
  const authorHook = useField('text');
  const urlHook = useField('text');

  const titleInput = Object.assign({}, titleHook);
  const authorInput = Object.assign({}, authorHook);
  const urlInput = Object.assign({}, urlHook);

  delete titleInput.resetInput;
  delete authorInput.resetInput;
  delete urlInput.resetInput;


  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = titleHook.value;
    const author = authorHook.value;
    const url = urlHook.value;


    try {
      await createBlog({
        title,
        author,
        url
      });
    } catch (e) {
      setNotification({message: `Error with creating blog`}, 2);
      console.log(e);
    }
  };

  return (
    <>

      <div >
        <form onSubmit={handleSubmit}>
          Title
          <input {...titleHook}/>

          <br/>
          Author
          <input {...authorHook}/>
          <br/>
          URL
          <input {...urlHook}/>

          <br/>
          <button type="submit">Create</button>
        </form>

      </div>
    </>
  );
};

export default BlogForm;