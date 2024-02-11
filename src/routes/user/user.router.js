const express = require("express");
const {
  getUserById,
  saveUser,
  getAllUsers,
  getUsersByFilter,
} = require("./user.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const userRouter = express.Router();

userRouter.get("/user/:userId", getUserById);
userRouter.put("/user/:userId", saveUser);
userRouter.get("/users", checkLoggedIn, getAllUsers);
userRouter.get("/users/filter", checkLoggedIn, getUsersByFilter);

module.exports = userRouter;
