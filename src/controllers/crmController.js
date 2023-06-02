const Contact = require("../models/CRM");

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

exports.getContact = async (req, res) => {
  const contactId = req.params.contactId;
  try {
    const contact = await Contact.find({ _id: contactId });
    res.send(contact);
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

exports.addContacts = async (req, res) => {
  const { firstName, lastName, email, company, phone } = req.body;
  try {
    const addContact = new Contact({
      firstName,
      lastName,
      email,
      company,
      phone,
    });
    const contact = await addContact.save();
    res.json({ contact });
  } catch (error) {
    res.status(500).send("Server error", error.message);
  }
};

exports.updateContacts = (req, res) => {
  res.send("Put request");
};

exports.deleteContacts = (req, res) => {
  res.send("Delete request");
};
