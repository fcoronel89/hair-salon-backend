const clientModel = require("../../models/client.model");

async function createNewClient(req, res) {
  try {
    await clientModel.createClient(req.body);
    res.status(201).json({ message: "Client created successfull" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewClient,
};
