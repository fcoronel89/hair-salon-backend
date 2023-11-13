const express = require("express");
const {
  createNewShift,
  findShiftById,
  getAllShifts,
  updateShift,
  deleteShift,
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
shiftRouter.delete("/shift/:shiftId", deleteShift);

module.exports = shiftRouter;
