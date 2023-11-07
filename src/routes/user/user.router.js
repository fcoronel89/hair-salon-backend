const express = require("express");
const { getUserByGoogleId } = require("./user.controller");

const userRouter = express.Router();

userRouter.get("/user/:googleId", getUserByGoogleId);

module.exports = userRouter;
