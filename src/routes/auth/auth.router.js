const express = require("express");
const { authenticate, authenticateCallback, authenticateFail } = require("./auth.controller");

const authRouter = express.Router();

authRouter.get("/auth/google", authenticate);
authRouter.get("/auth/google/callback", authenticateCallback);
authRouter.get("/failure", authenticateFail);

module.exports = authRouter;
