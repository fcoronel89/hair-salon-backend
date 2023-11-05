const express = require("express");
const {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
} = require("./auth.controller");
const passport = require("passport");

const authRouter = express.Router();

authRouter.get("/auth/google", authenticate);
authRouter.get("/auth/google/callback", authenticateCallback);
authRouter.get("/auth/logout", logout);
authRouter.get("/failure", authenticateFail);
authRouter.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Your personal secret is 42");
});

module.exports = authRouter;
