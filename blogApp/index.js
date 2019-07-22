const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const password = process.argv[2]

const mongoUrl =   `mongodb+srv://JoJoFS:${password}@cluster0-quxcq.mongodb.net/blog-app?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, { useNewUrlParser: true });

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
});

const Blog = mongoose.model('Blog', blogSchema);

app.use(cors());
app.use(bodyParser.json());

app.get('/api/blogs', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
          response.json(blogs)
      })
});

app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body);

    blog
      .save()
      .then(result => {
          response.status(201).json(result)
      })
});

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
