const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("../models/models");
require("dotenv").config();

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `/auth/facebook/callback`,
      profileFields: ["id", "displayName", "email"],
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
