const express = require("express");
const {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
  authSuccess,
} = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/auth/google", authenticate);
authRouter.get("/auth/google/callback", authenticateCallback);
authRouter.get("/auth/logout", logout);
authRouter.get("/failure", authenticateFail);
authRouter.get('/auth/success', authSuccess);
authRouter.get('/auth/isLoggedIn', checkLoggedIn, (req, res) => {
  return res.status(200).json(true);
});


module.exports = authRouter;
