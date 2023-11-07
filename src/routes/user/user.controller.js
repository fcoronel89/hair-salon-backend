const { findUserById, updateUser } = require("../../models/user.model");

async function getUserById(req, res) {
  const userId = req.params.userId;
  if (!userId) {
    return res(500).json({ error: "missing parameter" });
  }
  const user = await findUserById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(200).json({ user });
}

async function saveUser(req, res) {
  const userId = req.params.userId;
  const userData = req.body;
  const response = await updateUser(userId, userData);
  if (response) {
    return res.status(200).json({ ok: true, user: response });
  }
  return res.status(500).json({ error: "Something was wrong, try again" });
}

module.exports = {
  getUserById,
  saveUser
};
