const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true }, // Assuming you want to store Google OAuth user IDs
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  dni: { type: String },
  phone: { type: String },
  userType: { type: String },
  birthDate: { type: Date },
  active: { type: Boolean },
  avatar: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
