const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {type:String, required: true}, // Assuming you want to store Google OAuth user IDs
  email: {type:String, required: true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
