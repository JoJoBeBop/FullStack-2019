const blogsRouter = require('express').Router();
const mongoose = require('mongoose')

const Blog = require('../models/blog');

blogsRouter.get('/', (request, response) => {
  console.log("get blogs")
  Blog.find({}).then(blogs => {
      response.json(blogs)
    })
});

blogsRouter.post('/', (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then(result => {
      response.status(201).json(result)
    })
});

module.exports = blogsRouter
