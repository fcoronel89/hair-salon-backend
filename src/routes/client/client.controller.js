const clientModel = require("../../models/client.model");

async function createNewClient(req, res) {
  try {
    const newClient = await clientModel.createClient(req.body);
    res
      .status(201)
      .json(newClient);
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

async function findClientById(req, res) {
  const clientId = req.params.clientId;
  try {
    const existingClient = await clientModel.findClientById(clientId);
    res.status(200).json(existingClient || null);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getAllClients(req, res) {
  try {
    const clients = await clientModel.getAllClients();
    res.status(200).json(clients);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewClient,
  findClientByPhone,
  findClientById,
  getAllClients,
};
