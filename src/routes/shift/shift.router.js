const express = require("express");
const { createNewShift, findShiftById } = require("./shift.controller");
const {
  checkLoggedIn,
  checkIsAdminOrSeller,
} = require("../auth/auth.controller");

const shiftRouter = express.Router();

shiftRouter.post("/shift", checkLoggedIn, checkIsAdminOrSeller, createNewShift);
shiftRouter.get("/shift/:shiftId", checkLoggedIn, findShiftById);

module.exports = shiftRouter;
