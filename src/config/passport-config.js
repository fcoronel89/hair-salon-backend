// passport-config.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { findUserByGoogleId, saveUser } = require("../models/user.model");

require("dotenv").config();

const AUTH_OPTIONS = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: "/v1/auth/google/callback",
};

module.exports = function (passport) {
  // Passport configuration
  passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

  // save the session to the cookie
  passport.serializeUser((user, done) => {
    console.log("user", user);
    done(null, user);
  });

  // Read the session from the cookie
  passport.deserializeUser((obj, done) => {
    console.log("obj", obj);
    done(null, obj);
  });

  async function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log("Google Profile", profile);
    // You can store user data or perform other actions here
    const user = await findUserByGoogleId(profile.id);

    if (user) {
      done(null, existingUser);
    } else {
      const newUser = {
        googleId: profile.id,
        email: profile._json.email,
      };
      await saveUser(newUser);
      done(null, newUser);
    }
  }
};
