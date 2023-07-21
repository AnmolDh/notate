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
      profileFields: ["id", "displayName", "email", "picture"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let userInfo = await User.findOne({ authId: profile._json.id });
        if (!userInfo) {
          userInfo = await User.create({
            authVia: "Facebook",
            authId: profile._json.id,
            name: profile._json.name,
            email: profile._json.email,
            profilePicture: profile._json.picture.data.url,
          });
        }
        cb(null, userInfo);
      } catch (err) {
        cb(err, null);
      }
    }
  )
);

module.exports = passport;
