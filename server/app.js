const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { Note, User } = require("./models/models");
const handleRoutes = require("./routes/routesHandler");
const reqAuth = require("./auth/reqAuth");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(reqAuth);

mongoose.connect(process.env.MONGODB_URL);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id })
        .exec()
        .then((user) => {
          !user
            ? User.create({
                googleId: profile.id,
                name: profile._json.name,
                email: profile._json.email,
              }).then((user) => cb(null, user))
            : cb(null, user);
        })
        .catch((err) => cb(err, null));
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("http://localhost:4000/");
  }
);

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

User.findOne({ _id: "64b1795c43425f93d92e7618" }).then((r) => {
  r.notes.length === 0 && r.notes.push(defaultNotes[0]);
  r.save();
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
