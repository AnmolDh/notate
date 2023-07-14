const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", notesSchema);

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  notes: [notesSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = {Note, User};
