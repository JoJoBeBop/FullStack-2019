import React, { useState } from 'react'
import { useField } from '../hooks/index'
import { connect } from 'react-redux'

import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { loginUser, logoutUser } from '../reducers/userReducer'

const BlogForm = ({ createBlog, user, setNotification }) => {

  const titleHook = useField('text')
  const authorHook = useField('text')
  const urlHook = useField('text')

  const titleInput = Object.assign({}, titleHook)
  const authorInput = Object.assign({}, authorHook)
  const urlInput = Object.assign({}, urlHook)

  delete titleInput.resetInput
  delete authorInput.resetInput
  delete urlInput.resetInput


  const handleSubmit = async (event) => {
    event.preventDefault()
    const title = titleHook.value
    const author = authorHook.value
    const url = urlHook.value
    const token = user.token
    try {
      await createBlog({
        title,
        author,
        url,
        token
      })

      setNotification({ message: `New Post Made!` }, 2)

    } catch (e) {
      setNotification({ message: 'Error with creating blog' }, 2)
      console.log(e)
    }
  }

  return (
    <>

      <div >
        <h3>
          Create a new post!
        </h3>
        <form onSubmit={handleSubmit} className="ui input" id="PostForm">
          <input {...titleHook} placeholder="Title..." id="title"/>

          <br/>
          <input {...authorHook} placeholder="Author..." id="author"/>
          <br/>
          <input {...urlHook} placeholder="URL..." id="url"/>

          <br/>
          <button type="submit" className="ui button" id="Create">Create</button>
        </form>

      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  createBlog,
  setNotification
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm)

/*
export default BlogForm;*/
