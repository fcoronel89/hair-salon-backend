const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const AUTH_OPTIONS = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: "/v1/auth/google/callback",
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google Profile", profile);
  done(null, profile);
}

passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));

function authenticate(req, res) {
  passport.authenticate("google", {
    scope: ["email"],
  })(req, res);
}

// Define the options with session set to true
const authenticateOptions = {
  session: true,
};

function authenticateCallback(req, res) {
  passport.authenticate("google", authenticateOptions, (err, user) => {
    if (err) {
      console.log("error", err);
      // Handle authentication failure
      return res.redirect("/v1/failure");
    }
    // Handle authentication success, e.g., store user data, set cookies, etc.
    res.redirect("/v1");
  })(req, res);
}

function authenticateFail(req, res) {
  // Handle authentication failure here
  res.status(400).json({ error: "Authentication failed." });
}

module.exports = { authenticate, authenticateCallback, authenticateFail };
