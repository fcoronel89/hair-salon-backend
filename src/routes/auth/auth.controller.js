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
    session: true,
  })(req, res);
}

function authenticateFail(req, res) {
  // Handle authentication failure here
  res.status(400).json({ error: "Authentication failed." });
}

function logout(req, res) {
  // Passport provides a `logout` function to terminate the user's session
  req.logout(() => {
    res.status(200).json({ ok: true });
  });
}

function checkLoggedIn(req, res, next) {
  //req.user
  console.log("current user:", req.user);
  console.log("current Session:", req.session);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in!",
    });
  }
  next();
}

function checkIsAdmin(req, res, next) {
  const isAdmin = req.user.userType === 'admin';
  if(!isAdmin){
    return res.status(403).json({
      error: "You dont have permission",
    });
  }
  next();
}

function authSuccess(req, res) {
  // Redirect the user back to the React frontend with user data
  console.log("req", req.user);
  const redirectUrl = req.user.firstName ? "/login/" : `/crear-usuario/`;
  req.session.user = req.user;
  res.redirect(`${process.env.FRONTEND_URL}${redirectUrl}${req.user._id}`);
}

module.exports = {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
  checkIsAdmin,
  authSuccess,
};
