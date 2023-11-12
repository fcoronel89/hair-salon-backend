const shiftModel = require("../../models/shift.model");

async function createNewShift(req, res) {
  try {
    await shiftModel.createShift(req.body);
    res.status(201).json({ message: "shift created successfull" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function findShiftById(req, res) {
  try {
    const shift = await shiftModel.findShiftById(req.params.shiftId);
    if (!shift) {
      res.status(400).json({ error: "dont exist that shift" });
    } else {
      res.status(200).json(shift);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewShift,
  findShiftById,
};
