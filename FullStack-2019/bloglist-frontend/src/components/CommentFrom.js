import React from 'react';

const BlogForm = () => {
  const commentBlog = (event) => {
    event.preventDefault();


  }

  return (
    <div>
      <form>
        <input name={"Comment"}/>
        <button onSubmit={commentBlog}>Comment</button>

      </form>
    </div>
  );
};

export default BlogForm;
