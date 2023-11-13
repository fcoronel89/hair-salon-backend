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
shiftRouter.get("/shift/:shiftId", checkLoggedIn, findShiftById);
shiftRouter.get("/shifts", checkLoggedIn, getAllShifts);
shiftRouter.put("/shift/:shiftId", checkLoggedIn, updateShift);
shiftRouter.delete("/shift/:shiftId", checkLoggedIn, deleteShift);

module.exports = shiftRouter;
