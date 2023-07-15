const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models/models");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`,
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

module.exports = passport;