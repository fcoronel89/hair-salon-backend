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
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  createClient,
  findClient,
};
