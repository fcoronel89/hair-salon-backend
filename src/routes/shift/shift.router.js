const express = require("express");
const { createNewShift } = require("./shift.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const shiftRouter = express.Router();

shiftRouter.post("/shift", createNewShift);

module.exports = shiftRouter;
