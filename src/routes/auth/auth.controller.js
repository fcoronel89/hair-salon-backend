const passport = require("passport");
const { findUserById } = require("../../models/user.model");
require("dotenv").config();

function authenticate(req, res) {
  passport.authenticate("google", {
    scope: ["email"],
  })(req, res);
}

function authenticateCallback(req, res) {
  passport.authenticate("google", {
    failureRedirect: `${process.env.API_URL}/v1/failure`,
    successRedirect: `${process.env.API_URL}/v1/auth/success`,
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
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in!",
    });
  }
  next();
}

async function checkIsAdmin(req, res, next) {
  const user = await findUserById(req.user);
  const isAdmin = user.userType === "admin";
  if (!isAdmin) {
    return res.status(403).json({
      error: "You dont have permission",
    });
  }
  next();
}

async function checkIsAdminOrSeller(req, res, next) {
  const user = await findUserById(req.user);
  const hasAccess =
    user.userType === "admin" || user.userType === "seller";
  if (!hasAccess) {
    return res.status(403).json({
      error: "You dont have permission",
    });
  }
  next();
}

function authSuccess(req, res) {
  // Redirect the user back to the React frontend with user data
  console.log("req", req.user);
  const redirectUrl = "/login/";
  res.redirect(`${process.env.FRONTEND_URL}${redirectUrl}${req.user}`);
}

function isLoggedIn(req, res) {
  const isLoggedIn = req.isAuthenticated() && req.user;
  return res.status(200).json(isLoggedIn);
}

module.exports = {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
  checkIsAdmin,
  checkIsAdminOrSeller,
  authSuccess,
  isLoggedIn,
};
