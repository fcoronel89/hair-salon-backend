const express = require("express");
const { getUserById, saveUser } = require("./user.controller");

const userRouter = express.Router();

userRouter.get("/user/:userId", getUserById);
userRouter.put("/user/:userId", saveUser);

module.exports = userRouter;
