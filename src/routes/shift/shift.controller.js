const shiftModel = require("../../models/shift.model");

async function createNewShift(req, res) {
  try {
    await shiftModel.createShift(req.body);
    res.status(201).json({ message: "shift created successfull" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewShift,
};
