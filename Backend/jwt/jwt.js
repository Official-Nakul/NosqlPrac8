const jwt = require("jsonwebtoken");
const jwtSecret = "abc123";
const generateToken = (payload) => {
  return jwt.sign(payload, jwtSecret);
};
const jwtAuth = (req, res, next) => {
  // console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, jwtSecret);
    // console.log(decode);
    req.userData = decode;
    next();
  } else {
    res.status(401).json({ error: "unauthorized" });
  }
};
module.exports = { jwtAuth, generateToken };
