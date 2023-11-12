const Shift = require("./shift.mongo");

async function createShift(shift) {
  try {
    const newShift = new Shift(shift);
    console.log(newShift);
    await newShift.save();
  } catch (err) {
    throw err;
  }
}

async function findShiftById(shiftId) {
  return await Shift.findById(shiftId);
}

module.exports = {
  createShift,
  findShiftById
};
