const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Note = require("./models/note")
const handleRoutes = require("./routes/routesHandler");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(handleRoutes);

mongoose.connect(process.env.MONGODB_URL);

const defaultNotes = [
  {
    title: "App Features",
    content:
      "Create and organize notes effortlessly. Customize note categories and tags for easy organization. Edit and update notes with a user-friendly interface",
  },
  {
    title: "Future Enhancements",
    content:
      "Implement a rich text editor for formatting notes. Add support for attaching files and images to notes. Enable seamless synchronization across multiple devices",
  },
];

Note.find({}).then((r) => {
  (r.length === 0) && Note.insertMany(defaultNotes);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});