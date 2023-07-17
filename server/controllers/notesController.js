const { Note, User } = require("../models/models");
const defaultNotes = require("./defaultNotes");

exports.getNotes = (req, res) => {
  if (req.isAuthenticated()) {
    User.findOne({ _id: req.user._id }).then((data) => {
      data.notes.length === 0 &&
        defaultNotes.forEach((e) => data.notes.push(e));
      data.save();
      res.send(data.notes);
    });
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.postNote = (req, res) => {
  if (req.isAuthenticated()) {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    User.updateOne({ _id: req.user._id }, { $push: { notes: note } }).then(
      (data) => res.send(data)
    );
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.deleteNote = (req, res) => {
  if (req.isAuthenticated()) {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { notes: { _id: req.params.id } } },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.replaceNote = (req, res) => {
  if (req.isAuthenticated()) {
    User.findOneAndUpdate(
      { _id: req.user._id, "notes._id": req.params.id },
      {
        $set: {
          "notes.$": { title: req.body.title, content: req.body.content },
        },
      },
      { new: true }
    )
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.updateNote = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.isAuthenticated()) {
      User.findOneAndUpdate(
        { _id: req.user._id, "notes._id": req.params.id },
        {
          $set: {
            "notes.$.title": req.body.title,
            "notes.$.content": req.body.content,
          },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.send(err));
    }
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};
