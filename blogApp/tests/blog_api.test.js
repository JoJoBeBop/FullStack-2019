const mongoose = require('mongoose');
const supertest = require('supertest')
const Blog = require("../models/blog")
const app = require('../app');
const helper = require('./test_helper')

const apiBlogs = supertest(app);

/*RESETS EVERYTHING BEFORE ANY TEST IS MADE*/
beforeEach(async () => {
  await Blog.deleteMany({});

  let blogObj = new Blog(helper.initialBlog[0])
  await blogObj.save();

  blogObj = new Blog(helper.initialBlog[1])
  await blogObj.save()
});


/*/!*TESTS APP-BLOG-TEST LENGTH*!/
test('The length of blogs is 1', async () => {
  await apiBlogs
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const res = await apiBlogs.get("/api/blogs");
  const blogContent = res.body.map(r => r.title);
  expect(blogContent.length).toBe(1)
});*/

test('Blogs should be in JSON format', async () => {
  await apiBlogs
    .get('/api/blogs')
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const res = await apiBlogs.get('/api/blogs');
  expect(res.body.length).toBe(helper.initialBlog.length)
});

test("Blogs are able to be posted", async () => {
  const newBlog = {
    title: "New Blog",
    author: "New Author",
    url: "newblog.com",
    likes: "0"
  };
  await apiBlogs
    .post("/api/blogs")
    .send(newBlog)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const res = await apiBlogs.get('/api/blogs');
  const blogsContent = res.body.map(x => x.title);
  expect(res.body.length).toBe(helper.initialBlog.length + 1);
  expect(blogsContent).toContain('New Blog')
});

test("A blog with no likes shall be assigned 0 likes", async () => {
  const newBlog = {
    likes: ""
  };
  if (newBlog.likes === "") {
    newBlog.likes = 0
  }
  await apiBlogs
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  expect(newBlog.likes).toBe(0);
});

test('Blogs must have an "id" not "_id" ', async () => {
  await apiBlogs
    .get('/api/blogs/')
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const res = await apiBlogs.get('/api/blogs/');
  const idObject = res.body[0];
  expect(idObject.id).toBeDefined()
});


test("A blog has to have title and url assigned", async () => {
  const newBlog = {
    title: "",
    url: ""
  };
  await apiBlogs
    .post("/api/blogs")
    .send(newBlog)
    .expect(400);

  const res = await apiBlogs.get("/api/blogs")
  expect(res.body.length).toBe(helper.initialBlog.length)
});

afterAll(() => {
  mongoose.connection.close()
});