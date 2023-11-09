const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: String, required: true },
  phone: { type: String, required: true },
  image: { type: String, required: true },
  birthDate: { type: Date },
  serviceType: { type: [String], required: true },
  active: { type: Boolean, required: true },
});

const Professional = mongoose.model("Professional", professionalSchema);

module.exports = Professional;
