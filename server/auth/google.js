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
      User.findOne({ userId: profile.id })
        .exec()
        .then((user) => {
          !user
            ? User.create({
                userId: profile._json.id,
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
