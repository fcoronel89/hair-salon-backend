const express = require("express");
const {
  createNewShift,
  findShiftById,
  getAllShifts,
  updateShift,
} = require("./shift.controller");
const {
  checkLoggedIn,
  checkIsAdminOrSeller,
} = require("../auth/auth.controller");

const shiftRouter = express.Router();

shiftRouter.post("/shift", checkLoggedIn, checkIsAdminOrSeller, createNewShift);
shiftRouter.get("/shift/:shiftId", findShiftById);
shiftRouter.get("/shifts", getAllShifts);
shiftRouter.put("/shift/:shiftId", updateShift);

module.exports = shiftRouter;
