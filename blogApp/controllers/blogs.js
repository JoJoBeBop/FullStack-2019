const blogsRouter = require('express').Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const Blog = require('../models/blog');
const User = require('../models/user');


blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate("user", {username: 1, name: 1})
  response.json(blogs.map(blog => blog.toJSON()));

});

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
};

blogsRouter.post('/', async (request, response, next) => {
  const blogBody = request.body;
  const user = await User.findById(blogBody.userId);

  const token = getTokenFrom(request)
  console.log(request.headers.authorization);

  try {
    const decodedToken = jwt.verify(request.headers.authorization, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

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
  try{
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
    url: blogBody.url
  };

  try {
    const newBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true});
    response.json(newBlog.toJSON());
  } catch (exception) {
    next(exception)
  }

  /*  Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
      .then(upOne => {
        response.json(upOne.toJSON())
      })
      .catch(err => next(err))*/
});

module.exports = blogsRouter;