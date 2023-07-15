const express = require("express");
const passport = require("passport");
const app = express();

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}http://localhost:3000/login`,
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_URL);
  }
);

module.exports = app;