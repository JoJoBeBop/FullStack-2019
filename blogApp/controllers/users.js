const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs", {title: 1, author: 1, id: 1});
  response.json(users.map(u => u.toJSON()))
});

usersRouter.post("/", async (request, response, next) => {

  try {
    const userBody = request.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(userBody.password, saltRounds);

    const user = new User({
      username: userBody.username,
      user: userBody.name,
      passwordHash
    });
    const savedUser = await user.save();
    response.json(savedUser);

  } catch (exception) {
    next(exception)
  }
});

module.exports = usersRouter;