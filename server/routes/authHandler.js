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
    failureRedirect: `${process.env.CLIENT_URL}`,
  }),
  function (req, res) {
    res.redirect(`${process.env.CLIENT_URL}/home`);
  }
);

app.get("/isAuth", (req, res) => res.send(req.isAuthenticated()));

app.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) {
        res.json({ logout: false });
      }
      res.json({ logout: true });
    });
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
});

module.exports = app;
