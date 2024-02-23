// passport-config.js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {
  findUserByGoogleId,
  createUser,
  findUserById,
} = require("../models/user.model");

require("dotenv").config();

const AUTH_OPTIONS = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: `${process.env.API_URL}/v1/auth/google/callback`,
};

module.exports = function (passport) {
  // Passport configuration
  passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

  // save the session to the cookie
  passport.serializeUser((user, done) => {
    console.log("serializeUser", user);
    done(null, user);
  });


  // Read the session from the cookie
  passport.deserializeUser(async (userId, done) => {
    console.log("deserializeUser", userId);
    const user = await findUserById(userId);
    done(null, user?._id);
  });

  async function verifyCallback(accessToken, refreshToken, profile, done) {
    // You can store user data or perform other actions here
    const user = await findUserByGoogleId(profile.id);
    console.log("profile", profile);
    if (user) {
      done(null, user?._id);
    } else {
      const newUser = {
        googleId: profile.id,
        email: profile._json.email,
        avatar: profile._json.picture,
      };
      const user = await createUser(newUser);
      done(null, user._id);
    }
  }
};
