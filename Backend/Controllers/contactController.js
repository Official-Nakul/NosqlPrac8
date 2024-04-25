const Contact = require("../Models/contactSchema");
const asynchandler = require("express-async-handler");
const getAllContact = asynchandler(async (req, res) => {
  const data = await Contact.find({ uID: req.userData.uid });
  if (data.length === 0) {
    return res.status(200).send("no contacts found");
  }
  res.status(200).json(data);
});

const createContact = asynchandler(async (req, res) => {
  const data = req.body;
  const contact = Contact(data);
  const { uid } = req.userData;
  contact.uID = uid;
  const response = await contact.save();
  res.status(200).send(response);
});

module.exports = { getAllContact, createContact };
