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

module.exports = {
  createShift,
};
