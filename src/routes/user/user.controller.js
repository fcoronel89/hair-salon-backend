const { findUserByGoogleId } = require("../../models/user.model");

async function getUserByGoogleId(req, res) {
  const googleId = req.params.googleId;
  if (!googleId) {
    return res(500).json({ error: "missing parameter" });
  }
  const user = await findUserByGoogleId(googleId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.status(200).json({ user });
}

module.exports = {
    getUserByGoogleId
}
