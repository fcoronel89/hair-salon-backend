const express = require("express");
const {
  createNewShift,
  findShiftById,
  getAllShifts,
} = require("./shift.controller");
const {
  checkLoggedIn,
  checkIsAdminOrSeller,
} = require("../auth/auth.controller");

const shiftRouter = express.Router();

shiftRouter.post("/shift", checkLoggedIn, checkIsAdminOrSeller, createNewShift);
shiftRouter.get("/shift/:shiftId", checkLoggedIn, findShiftById);
shiftRouter.get("/shifts", getAllShifts);

module.exports = shiftRouter;
