const express = require("express");
const { jwtAuth } = require("../jwt/jwt");
const {
  getAllContact,
  createContact,
} = require("../Controllers/contactController");
const router = express.Router();

router.route("/").get(jwtAuth, getAllContact);

// /api/contact/create
router.route("/create").post(jwtAuth, createContact);
module.exports = router;
