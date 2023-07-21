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
    async function (accessToken, refreshToken, profile, cb) {
      try {
        let userInfo = await User.findOne({ authId: profile._json.sub });
        if (!userInfo) {
          userInfo = await User.create({
            authVia: "Google",
            authId: profile._json.sub,
            name: profile._json.name,
            email: profile._json.email,
            profilePicture: profile._json.picture,
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
