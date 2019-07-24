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

blogsRouter.delete("/:id", async (request, response, next) => {
  try{
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  console.log(request.body);
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

  /*  Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
      .then(upOne => {
        response.json(upOne.toJSON())
      })
      .catch(err => next(err))*/
});

module.exports = blogsRouter;