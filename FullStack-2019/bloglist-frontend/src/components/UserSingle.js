import React from 'react';
import {connect} from "react-redux";

const UserSingle = ({blogs}) => {

  console.log(blogs);

  if (blogs !== undefined ) {

    console.log(blogs);
    return (
      <div>
        <h2>{blogs[0].user.username}</h2>
        <h4>Users Blogs</h4>
        {blogs.map(blog => (
          <div  key={blog.id}>
            <ul>
              <li>
                {blog.title}
              </li>
            </ul>
          </div>

        ))}

      </div>
    );
  } else {
    console.log("slow");
    return (
      <div>slow</div>
    )
  }

};


const blogsToShow = (blogs, id) => {
  return blogs.filter(blog => blog.user.id === id);
};

const mapStateToProps = (state, userId) => {
  if (state.blogs.length >= 1) {
    return {
      blogs: blogsToShow(state.blogs, userId.userId),
    };
  }

};

export default connect(
  mapStateToProps,
  null
)(UserSingle);

