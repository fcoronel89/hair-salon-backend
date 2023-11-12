const Shift = require("./shift.mongo");

async function createShift(shift) {
  try {
    const newShift = new Shift(shift);
    console.log(newShift);
    await newShift.save();
    return newShift;
  } catch (err) {
    throw err;
  }
}

async function findShiftById(shiftId) {
  return await Shift.findById(shiftId);
}

async function getAllShifts() {
  try {
    const shifts = await Shift.find();
    return shifts;
  } catch (err) {
    throw err;
  }
}

async function updateShift(shiftId, shift) {
  try {
    const updatedShift = await Shift.findByIdAndUpdate(shiftId, shift, {
      new: true,
    });

    return updatedShift;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createShift,
  findShiftById,
  getAllShifts,
  updateShift,
};
