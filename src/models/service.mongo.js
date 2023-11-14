const mongoose = require('mongoose');

// Subservice schema
const subserviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Add other fields specific to Subservice
});

// Service schema
const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subServices: [{ type: subserviceSchema, required: true }],
});

// Service model
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
