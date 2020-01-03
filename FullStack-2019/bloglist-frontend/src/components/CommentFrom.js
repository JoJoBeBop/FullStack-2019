import React from 'react'
import { useField } from '../hooks'
import { commentBlog } from '../reducers/blogReducer'
import { connect } from 'react-redux'


const CommentForm = ({ blog, commentBlog }) => {
  const commentHook = useField('text')
  const commentInput = Object.assign({}, commentHook)
  delete commentInput.resetInput


  const comment = async (event) => {
    event.preventDefault()

    console.log(blog)
    const com = commentHook.value

    try {
      await commentBlog({ com, blog })

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <form onSubmit={comment} className="ui input">

        <input {...commentHook} />

        <button className="ui button" type="submit">Comment</button>

      </form>
    </div>
  )
}

/*const mapStateToProps = (state) => {
  return {
    blog: state.blogs,
  };
};*/

const mapDispatchToProps = {
  commentBlog,
}


export default connect(
  null,
  mapDispatchToProps
)(CommentForm)

/*
export default CommentForm;
*/
