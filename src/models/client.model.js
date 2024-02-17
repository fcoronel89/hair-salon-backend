const Client = require("./client.mongo");

async function findClient(filter) {
  return await Client.findOne(filter);
}

async function createClient(client) {
  try {
    const existingClient = await findClient({
      phone: client.phone,
    });
    if (existingClient) {
      throw new Error("Client with this phone already exist");
    }
    const newClient = new Client(client);
    console.log(newClient);
    await newClient.save();
    return newClient;
  } catch (err) {
    throw new Error(err);
  }
}

async function findClientById(clientId) {
  return await Client.findById(clientId);
}

async function getAllClients() {
  return await Client.find({});
}

module.exports = {
  createClient,
  findClient,
  findClientById,
  getAllClients,
};
