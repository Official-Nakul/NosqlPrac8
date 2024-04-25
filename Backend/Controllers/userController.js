const asynchandler = require("express-async-handler");
const { generateToken } = require("../jwt/jwt");
const User = require("../Models/userSchema");

const login = asynchandler(async (req, res) => {
  const data = req.body;
  console.log(data);
  if (!data) {
    return res.status(401).json({ error: "unauthorized" });
  }
  const user = await User.findOne({ user_name: data.username });
  if (!user) {
    return res.status(401).json({ error: "user not found" });
  }
  if (user.password !== data.password) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  const payload = {
    username: user.user_name,
    uid: user._id,
  };
  const token = generateToken(payload);
  return res.status(200).json({ token: token });
});

const signin = asynchandler(async (req, res) => {
  const data = req.body;
  const user = User(data);
  const payload = {
    username: user.user_name,
    uid: user._id,
  };
  const response = await user.save();
  const token = generateToken(payload);
  res.status(200).send({ response, token: token });
});

module.exports = { login, signin };
