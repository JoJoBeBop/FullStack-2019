import React, { useState } from "react";
import {useField} from "../hooks/index"
import {connect} from "react-redux";

import {createBlog} from "../reducers/blogReducer";
import {setNotification} from "../reducers/notificationReducer";
import {loginUser, logoutUser} from "../reducers/userReducer";

const BlogForm = ({createBlog, user}) => {

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
    const token = user.token
    try {
      await createBlog({
        title,
        author,
        url,
        token
      });
    } catch (e) {
      setNotification({message: `Error with creating blog`}, 2);
      console.log(e);
    }
  };

  return (
    <>

      <div >
        <h3>
          Create a new post!
        </h3>
        <form onSubmit={handleSubmit} class="ui input" id="PostForm">
          <input {...titleHook} placeholder="Title..."/>

          <br/>
          <input {...authorHook} placeholder="Author..."/>
          <br/>
          <input {...urlHook} placeholder="URL..."/>

          <br/>
          <button type="submit" class="ui button">Create</button>
        </form>

      </div>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  createBlog,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm);

/*
export default BlogForm;*/
