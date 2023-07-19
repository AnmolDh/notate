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

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["public_profile", "email"] })
);

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: `${process.env.CLIENT_URL}`,
  }),
  function (req, res) {
    res.redirect(`${process.env.CLIENT_URL}/home`);
  }
);

app.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      authVia: req.user.authVia,
      authId: req.user.authId,
      name: req.user.name,
      email: req.user.email,
      profilePicture: req.user.profilePicture,
      isLoggedIn: req.isAuthenticated(),
    });
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
});

app.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout((err) => {
      if (err) {
        res.send(false);
      }
      res.send(true);
    });
  } else {
    res.status(401).json({ error: "Unauthorized Access" });
  }
});

module.exports = app;
