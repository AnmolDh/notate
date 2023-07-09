const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/notesDB");

const notesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {
  Note.find({}).then((data) => {
    res.send(data);
  });
});

app.post("/", (req, res) => {
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  note.save();
  res.send(note);
});

app.delete("/:id", (req, res) => {
  Note.deleteOne({ _id: req.params.id })
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
});

app.put("/", (req, res) => {
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
});

app.patch("/", (req, res) => {
  Note.updateOne(
    { _id: req.body.id },
    {
      title: req.body.title,
      content: req.body.content,
    }
  )
    .then((r) => res.send(r))
    .catch((err) => res.send(err));
});

app.listen(4000, () => console.log("server started!"));
