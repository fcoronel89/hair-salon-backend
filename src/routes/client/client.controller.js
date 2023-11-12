const clientModel = require("../../models/client.model");

async function createNewClient(req, res) {
  try {
    const newClient = await clientModel.createClient(req.body);
    console.log("newClient", newClient);
    res
      .status(201)
      .json({ client: newClient, message: "Client created successfull" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function findClientByPhone(req, res) {
  const phone = req.query.phone;
  try {
    const existingClient = await clientModel.findClient({ phone });
    res.status(200).json(existingClient || null);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewClient,
  findClientByPhone,
};
