import blogService from "../services/blogs"

const blogReducer = (state = [], action) => {
  switch(action.type) {

    case "NEW_BLOG":
      return [...state, action.data];

    case "INIT_BLOGS":
      return action.data;

    case "VOTE_BLOG":
      const id = action.data.id;
      const blogToVote = state.find(i => i.id === id);
      const voteBlog = {
        ...blogToVote,
        likes: blogToVote.likes + 1
      };
      console.log();
      return (state.map(blog => blog.id !== id ? blog  : voteBlog));

    case "UPDATE_BLOG":
      return state.map(blog => blog.id === action.data.id ? action.data : blog
      );

    case "DELETE_BLOG":
      console.log(action.data);
      return state.filter(blog => blog.id !== action.data);

    case "NEW_COMMENT":
      console.log(action.data);

      return null;

    default:
      return state;
  }

};

export const commentBlog = (content) => {
  console.log(content.blog.id);
  const blogId = content.blog.id;

  return async dispatch => {
    const newComment = await blogService.comment(content, blogId);
    dispatch({
      type: "NEW_COMMENT",
      data: newComment
    })
  }
};

export const createBlog = (content, token) => {
/*  console.log(content);
  console.log(token);*/

  return async dispatch => {
    console.log(content);
    let newBlog = await blogService.create(content, token);
    console.log(newBlog);
    dispatch ({
      type: "NEW_BLOG",
      data: newBlog
    })
  }
};

/*Always just returned null after reloading page*/
export const voteBlog = (blog) => {
  return async dispatch => {
    const newVote = await blogService.newVote(blog)
    dispatch({
      type: "VOTE_BLOG",
      data: newVote
    })
  }
};

export const blogUpdate = (blog) => {
  const newObject = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes + 1,
    comments: blog.comments
  };

  return async dispatch => {
    const newUpdate = await blogService.update(blog, newObject);
    dispatch({
      type: "UPDATE_BLOG",
      data: newUpdate
    })
  }
};


export const blogComment = (blog) => {
  const newObject = {
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.likes,
    comments: blog.comments
  };

  return async dispatch => {
    const newUpdate = await blogService.update(blog, newObject);
    dispatch({
      type: "COMMENT_BLOG",
      data: newUpdate
    })
  }
};

export const blogDelete = (blog) => {
  return async dispatch => {
    const deletedBlog = await blogService.remove(blog);
    dispatch({
      type: "DELETE_BLOG",
      data: deletedBlog
    })
  }
};

export const initializeBlogs = () => {
  return async dispatch => {

    const blogs = await blogService.getAll();
    dispatch({
      type: "INIT_BLOGS",
      data: blogs
    })
  }
};

export default blogReducer