const usersModel = require("../../models/user.model");

async function getUserById(req, res) {
  const userId = req.params?.userId;
  if (!userId) {
    return res(500).json({ error: "missing parameter" });
  }
  try {
    const user = await usersModel.findUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function saveUser(req, res) {
  const userId = req.params.userId;
  const userData = req.body;
  const response = await usersModel.updateUser(userId, userData);
  if (response) {
    return res.status(200).json({ ok: true, user: response });
  }
  return res.status(500).json({ error: "Something was wrong, try again" });
}

async function getAllUsers(req, res) {
  try {
    const users = await usersModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getUsersByFilter(req, res) {
  const { userType } = req.query;
  const filter = userType ? { userType } : {};
  try {
    const users = await usersModel.findUsersByFilter(filter);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getUserById,
  saveUser,
  getAllUsers,
  getUsersByFilter,
};
