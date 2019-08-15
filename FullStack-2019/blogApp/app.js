const config = require('./utils/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose');
const logger = require('./utils/logger');
const userRouter = require("./controllers/users");
const loginRouter = require('./controllers/login');


/*
console.log('connecting to', config.MONGODB_URI);
*/

logger.info('connecting to', config.PORT)


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    /*console.log('connected to MongoDB')*/
    logger.info('connected to MongoDB')

  })
  .catch((error) => {
    /*console.log('error connection to MongoDB:', error.message)*/
    logger.error('error connection to MongoDB:', error.message)
  });

app.use(cors());
app.use(bodyParser.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", userRouter);
app.use('/api/login', loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;