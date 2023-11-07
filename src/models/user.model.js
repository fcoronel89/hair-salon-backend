const User = require("./user.mongo");

async function findUser(filter) {
  return await User.findOne(filter);
}

async function findUserByGoogleId(googleId) {
  return await findUser({ googleId });
}

async function findUserById(userId) {
  return await User.findById(userId);
}

async function createUser(user) {
  try {
    await User.findOneAndUpdate({ googleId: user.googleId }, user, {
      upsert: true,
      new: true,
    });
  } catch (error) {
    throw new Error("Fail saving in database");
  }
}

async function updateUser(userId, userData) {
  try {
    console.log("userId", userId, userData);
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { findUserByGoogleId, createUser, updateUser, findUserById };
