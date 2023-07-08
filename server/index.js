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



app.listen(4000, () => console.log("server started!"));