const shiftModel = require("../../models/shift.model");

async function createNewShift(req, res) {
  try {
    const newShift = await shiftModel.createShift(req.body);
    res
      .status(201)
      .json({ shift: newShift, message: "shift created successfull" });
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

async function getAllShifts(req, res) {
  try {
    const shifts = await shiftModel.getAllShifts();
    if (!shifts) {
      res.status(400).json({ error: "dont have shifts" });
    } else {
      res.status(200).json(shifts);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function updateShift(req, res) {
  try {
    const shiftId = req.params.shiftId;
    const updatedShiftData = req.body;
    const updatedPShift = await shiftModel.updateShift(
      shiftId,
      updatedShiftData
    );
    return res.status(200).json({ ok: true, shift: updatedPShift });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

async function deleteShift(req, res) {
  try {
    const shiftId = req.params.shiftId;
    const user = req.user;

    await shiftModel.deleteShift(shiftId, user);

    return res.status(200).json({ message: "Shift deleted successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewShift,
  findShiftById,
  getAllShifts,
  updateShift,
  deleteShift,
};
