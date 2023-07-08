const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/notesDB");

const notesSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {
  Note.find({}).then((data) => {
    res.send(data);
  })
});

app.post("/", (req, res) => {
  const reqTitle = req.body.title;
  const reqContent = req.body.content;
  const note = new Note({
    title: reqTitle,
    content: reqContent
  });
  note.save();
  res.send(note);
});

app.delete("/", (req, res) => {
  const reqDelete = req.body.id;
  Note.deleteOne({ _id: reqDelete })
    .then((resp) => res.send(resp))
    .catch((err) => res.send(err));
});

app.listen(4000, () => console.log("server started!"));