const User = require("./user.mongo");

async function findUser(filter) {
  return await User.findOne(filter);
}

async function findUsersByFilter(filter) {
  return await User.find(filter);
}

async function findUserByGoogleId(googleId) {
  return await findUser({ googleId });
}

async function findUserById(userId) {
  return await User.findById(userId);
}

async function createUser(user) {
  try {
    return await User.findOneAndUpdate({ googleId: user.googleId }, user, {
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
    const userType =
      userData.userType === "seller" || userData.userType === "hairsalon"
        ? userData.userType
        : "hairsalon";
    return await User.findByIdAndUpdate(
      userId,
      { ...userData, userType },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  findUserByGoogleId,
  createUser,
  updateUser,
  findUserById,
  getAllUsers,
  findUsersByFilter,
};
