const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  createdOn: { type: Date, default: Date.now },
  title: String,
  content: String,
});

const Note = mongoose.model("Note", notesSchema);

const userSchema = new mongoose.Schema({
  createdOn: { type: Date, default: Date.now },
  authVia: String,
  authId: String,
  name: String,
  email: String,
  profilePicture: String,
  notes: [notesSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = { Note, User };
