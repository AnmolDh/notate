const express = require("express");
const notesController = require("../controllers/notesController");

const app = express();

app.get("/", notesController.getNotes);

app.post("/", notesController.postNote);

app.delete("/:id", notesController.deleteNote);

app.put("/:id", notesController.replaceNote);

app.patch("/:id", notesController.updateNote);

module.exports = app;
