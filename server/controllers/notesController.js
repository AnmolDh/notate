const { Note, User } = require("../models/models");
const defaultNotes = require("./defaultNotes");

exports.getNotes = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const userData = await User.findOne({ _id: req.user._id });
      userData.notes.length === 0 &&
        defaultNotes.forEach((e) => userData.notes.push(e));
      userData.save();
      res.send(userData.notes);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.postNote = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const note = new Note({
        title: req.body.title,
        content: req.body.content,
      });
      const userData = await User.updateOne(
        { _id: req.user._id },
        { $push: { notes: note } }
      );
      res.send(userData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.deleteNote = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.user._id },
        { $pull: { notes: { _id: req.params.id } } },
        { new: true }
      );
      res.send(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.replaceNote = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.user._id, "notes._id": req.params.id },
        {
          $set: {
            "notes.$": { title: req.body.title, content: req.body.content },
          },
        },
        { new: true }
      );
      res.send(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

exports.updateNote = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.user._id, "notes._id": req.params.id },
        {
          $set: {
            "notes.$.title": req.body.title,
            "notes.$.title": req.body.content,
          },
        },
        { new: true }
      );
      res.send(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};
