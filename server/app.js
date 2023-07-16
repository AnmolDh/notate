const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { User } = require("./models/models");
const handleRoutes = require("./routes/routesHandler");
const handleAuthRoutes = require("./routes/authHandler")
const passport = require("passport");
const googleAuth = require("./auth/google")
const session = require("express-session");
require("dotenv").config();

const app = express();
mongoose.connect(process.env.MONGODB_URL);

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(handleAuthRoutes);
app.use(handleRoutes);

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

// User.findOne({ _id: "64b25171bb5fd0dd70fe043a" }).then((r) => {
//   r.notes.length === 0 && r.notes.push(defaultNotes[0]);
//   r.save();
// });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
