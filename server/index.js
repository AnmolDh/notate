const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const handleRoutes = require("./routes/routesHandler");
const handleAuthRoutes = require("./routes/authHandler");
const passport = require("passport");
const googleAuth = require("./auth/google");
const facebookAuth = require("./auth/facebook");
const session = require("express-session");
require("dotenv").config();

const app = express();
mongoose.connect(process.env.MONGODB_URL);

process.env.NODE_ENV === "production" && app.set("trust proxy", true);
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: process.env.NODE_ENV === "production" ? {
      sameSite: "none",
      secure: true,
    } : {},
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(handleAuthRoutes);
app.use(handleRoutes);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, user);
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
