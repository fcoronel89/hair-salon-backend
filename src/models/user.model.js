const User = require("./user.mongo");

async function findUser(filter) {
  return await User.findOne(filter);
}

async function findUserByGoogleId(googleId) {
  return await findUser({ googleId });
}

async function saveUser(user) {
  try {
    await User.findOneAndUpdate({ googleId: user.googleId }, user, {
      upsert: true,
    });
  } catch (error) {
    throw new Error("Fail saving in database");
  }
}

module.exports = { findUserByGoogleId, saveUser };
