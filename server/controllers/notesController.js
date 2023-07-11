const Note = require("../models/note");

exports.getNotes = (req, res) => {
  Note.find({}).then((data) => {
    res.send(data);
  });
};

exports.postNote = (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  note.save();
  res.send(note);
};

exports.deleteNote = (req, res) => {
  Note.deleteOne({ _id: req.params.id })
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
};

exports.replaceNote = (req, res) => {
  Note.replaceOne(
    {
      _id: req.body.id,
    },
    {
      title: req.body.title,
      content: req.body.content,
    }
  )
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
};

exports.updateNote = (req, res) => {
  Note.updateOne(
    { _id: req.body.id },
    {
      title: req.body.title,
      content: req.body.content,
    }
  )
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
};
