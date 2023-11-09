const Professional = require("./professional.mongo");

async function findProfessional(filter) {
  return await Professional.findOne(filter);
}

async function createProfessional(professional) {
  try {
    const existingProfessional = await findProfessional({
      phone: professional.phone,
    });
    if (existingProfessional) {
      throw new Error("Professional with this phone already exist");
    }
    const newProfessional = new Professional(professional);
    console.log(newProfessional);
    await newProfessional.save();
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
    createProfessional
}