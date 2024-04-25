const express = require("express");
const router = express.Router();
const { jwtAuth } = require("../jwt/jwt");
const Contact = require("../Models/contactSchema");

router.route("/").get(jwtAuth, async (req, res) => {
  const data = await Contact.find({ uID: req.userData.uid });
  res.status(200).json(data);
});

// /api/contact/create
router.route("/create").post(jwtAuth, async (req, res) => {
  const data = req.body;
  const contact = Contact(data);
  const { uid } = req.userData;
  contact.uID = uid;
  // console.log(req);
  const response = await contact.save();
  res.status(200).send(response);
});
module.exports = router;
