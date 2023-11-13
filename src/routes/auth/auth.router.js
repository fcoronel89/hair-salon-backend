const express = require("express");
const {
  authenticate,
  authenticateCallback,
  authenticateFail,
  logout,
  checkLoggedIn,
  authSuccess,
  isLoggedIn,
} = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/auth/google", authenticate);
authRouter.get("/auth/google/callback", authenticateCallback);
authRouter.get("/auth/logout", logout);
authRouter.get("/failure", authenticateFail);
authRouter.get('/auth/success', authSuccess);
authRouter.get('/auth/isLoggedIn', isLoggedIn);


module.exports = authRouter;
