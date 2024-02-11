const mongoose = require("mongoose");

const shiftSchema = new mongoose.Schema({
  attended: { type: Boolean, required: true },
  clientConfirmed: { type: Boolean, required: true },
  clientId: { type: String, required: true },
  creatorId: { type: String, required: true },
  date: { type: Date, required: true },
  detail: { type: String, required: true },
  duration: { type: String, required: true },
  professionalId: { type: String, required: true },
  professionalConfirmed: { type: Boolean, required: true },
  serviceId: { type: String, required: true },
  subServiceId: { type: String, required: true },
  time: { type: String, required: true },
  neighbourhood: { type: String, required: true },
  hairsalonId: { type: String, required: true },
  amountPaid: { type: Number },
});

const Shift = mongoose.model("Shift", shiftSchema);

module.exports = Shift;
