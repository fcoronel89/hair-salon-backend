const passport = require("passport");
require("dotenv").config();

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
  passport.authenticate("google", {
    failureRedirect: "/v1/failure",
    successRedirect: "/v1/auth/success",
  })(req, res);
}

function authenticateFail(req, res) {
  // Handle authentication failure here
  res.status(400).json({ error: "Authentication failed." });
}

function logout(req, res) {
  // Passport provides a `logout` function to terminate the user's session
  req.logout(() => {
    // Redirect to a page or URL after logout (e.g., the home page)
    res.redirect("/v1/");
  });
}

function checkLoggedIn(req, res, next) {
  //req.user
  console.log("current user:", req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in!",
    });
  }
  next();
}

function authSuccess(req, res) {
  // Redirect the user back to the React frontend with user data
  console.log("req", req.user);
  const redirectUrl = req.user.firstName
    ? "/agenda"
    : `/crear-usuario/${req.user._id}`;
  res.redirect(`${process.env.FRONTEND_URL}${redirectUrl}`);
}

module.exports = {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
  authSuccess,
};
