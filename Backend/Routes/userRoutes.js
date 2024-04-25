const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const { generateToken, jwtAuth } = require("../jwt/jwt");

// router.route("/").get(jwtAuth, async (req, res) => {
//   const data = await Contact.find({});
//   res.status(200).json(data);
// });

router.route("/signin").post(async (req, res) => {
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

module.exports = router;
