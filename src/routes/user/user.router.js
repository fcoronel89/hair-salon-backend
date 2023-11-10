const express = require("express");
const { getUserById, saveUser, getAllUsers } = require("./user.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const userRouter = express.Router();

userRouter.get("/user/:userId", getUserById);
userRouter.put("/user/:userId", saveUser);
userRouter.get("/users", getAllUsers, checkLoggedIn, checkIsAdmin);

module.exports = userRouter;
