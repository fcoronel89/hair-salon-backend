const Service = require("./service.mongo");

async function createService(service) {
  try {
    const newService = new Service(service);
    await newService.save();
  } catch (err) {
    throw err;
  }
}

async function getServices() {
  try {
    const services = await Service.find();
    return services;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createService,
  getServices,
};
