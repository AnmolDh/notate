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
      User.findOne({ authId: profile._json.sub })
        .exec()
        .then((user) => {
          !user
            ? User.create({
                authVia: "Google",
                authId: profile._json.sub,
                name: profile._json.name,
                email: profile._json.email,
              }).then((user) => cb(null, user))
            : cb(null, user);
        })
        .catch((err) => cb(err, null));
    }
  )
);

module.exports = passport;
