const Blog = require("../models/blog");

/*MAKES SURE THAT NO BLOGS ARE UPLOADED THAT CONTAIN NO DATA*/

const initialBlog = [
  {
    title: "Frog Blog",
    author: "GG Author",
    url: "ggsfrogs.com",
    likes: "0"
  },
  {
    title: "Cottage Blog",
    author: "BB Author",
    url: "cozycotsyo.com",
    likes: "0"
  }
];

/*CREATES ID THAT DOESN'T ALREADY EXIST*/
const nonExistingId = async () => {
  const blog = new Blog({title: "this 'bout to be deleted yo"});
  await blog.save();
  await blog.remove();

  return blog._id.toString()
};

/*CHECK BLOGS CONTAINED IN DATABASE*/
const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON())
};

module.exports = {initialBlog, nonExistingId, blogsInDb}