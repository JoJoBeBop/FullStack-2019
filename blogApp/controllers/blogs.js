const blogsRouter = require('express').Router();
const mongoose = require('mongoose')

const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map(blog => blog.toJSON()));

});

blogsRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body);

  blog.save().then(result => {
      response.json(result.toJSON())
    })
    .catch(err => next(err))
});

module.exports = blogsRouter;