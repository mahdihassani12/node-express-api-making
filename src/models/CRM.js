const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    require: "Enter a first name",
  },
  lastName: {
    type: String,
    require: "Enter a last name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;
