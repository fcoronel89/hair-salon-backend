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
userRouter.get("/users", checkLoggedIn, checkIsAdmin, getAllUsers);
userRouter.get("/users/filter", checkLoggedIn, checkIsAdmin, getUsersByFilter);

module.exports = userRouter;
