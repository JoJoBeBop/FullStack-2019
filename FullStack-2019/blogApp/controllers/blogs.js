const blogsRouter = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Blog = require('../models/blog');
const User = require('../models/user');

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate("user", {username: 1, name: 1})
  response.json(blogs.map(blog => blog.toJSON()));

});

blogsRouter.get('/:id', async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id)
    console.log(blog);
    if (blog) {
      response.json(blog.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.post('/', async (request, response, next) => {
  console.log("POST");
  const blogBody = request.body;

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
    title: blogBody.title,
    author: blogBody.author,
    url: blogBody.url,
    user: user._id
  });

    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.json(savedBlog.toJSON());
  } catch(exception) {
    next(exception)
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const blog = await Blog.findById(request.params.id);

  try{
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id);


    if (blog.user.toString() !== user._id.toString()) {
      return response.status(401).json({ error: 'This user does not have the authority to delete this post' })
    } else {
      console.log("SUCCESS", blog.user.toString(), user._id.toString())
    }

    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  const blogBody = request.body;

  const blog = {
    title: blogBody.title,
    author: blogBody.author,
    url: blogBody.url,
    likes: blogBody.likes
  };

  try {
    const newBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true});
    response.json(newBlog.toJSON());
  } catch (exception) {
    next(exception)
  }

});

module.exports = blogsRouter;