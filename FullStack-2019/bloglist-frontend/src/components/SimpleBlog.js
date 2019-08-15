import React from 'react'

const SimpleBlog = ({ blog, likeBlog }) => (
  <div>
    <div>
      {blog.title} {blog.author}
    </div>
    <div>
      blog has {blog.likes} likes
      <button onClick={likeBlog}>Like</button>
    </div>
  </div>
)

export default SimpleBlog