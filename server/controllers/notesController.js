const { Note, User } = require("../models/models");

exports.getNotes = (req, res) => {
  if (req.isAuthenticated()) {
    User.findOne({ _id: req.user.id }).then((data) => {
      res.send(
        "<form method='POST' action='/'><input type='text' name='title'></input><input type='text' name='content'></input><input type='submit'></input></form>");
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
    User.findOne({ _id: req.user.id }).then((data) => {
      data.notes.push(note);
      data.save();
    });
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.deleteNote = (req, res) => {
  if (req.isAuthenticated()) {
    Note.deleteOne({ _id: req.params.id })
      .then((r) => res.send(r))
      .catch((err) => res.send(err));
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.replaceNote = (req, res) => {
  if (req.isAuthenticated()) {
    Note.replaceOne(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        content: req.body.content,
      }
    )
      .then((r) => res.send(r))
      .catch((err) => res.send(err));
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};

exports.updateNote = (req, res) => {
  if (req.isAuthenticated()) {
      Note.updateOne(
        { _id: req.params.id },
        {
          title: req.body.title,
          content: req.body.content,
        }
      )
        .then((r) => res.send(r))
        .catch((err) => res.send(err));
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
};
