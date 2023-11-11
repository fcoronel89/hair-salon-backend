const express = require("express");
const { createNewShift } = require("./shift.controller");
const { checkLoggedIn, checkIsAdminOrSeller } = require("../auth/auth.controller");

const shiftRouter = express.Router();

shiftRouter.post("/shift", checkLoggedIn, checkIsAdminOrSeller, createNewShift);

module.exports = shiftRouter;
