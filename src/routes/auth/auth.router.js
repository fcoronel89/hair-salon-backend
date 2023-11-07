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
authRouter.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Your personal secret is 42");
});
authRouter.get('/auth/success', authSuccess);


module.exports = authRouter;
