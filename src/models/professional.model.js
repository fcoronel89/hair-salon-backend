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

async function updateProfessional(professionalId, professional) {
  try {
    const existingProfessionalWithPhone = await Professional.findOne({
      phone: professional.phone,
      _id: { $ne: professionalId }, // Exclude the current user being updated
    });
    if (existingProfessionalWithPhone) {
      throw new Error("Professional with this phone already exist");
    }
    // Update the user's information
    const updatedProfessional = await Professional.findByIdAndUpdate(
      professionalId,
      professional,
      { new: true }
    );
    return updatedProfessional;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createProfessional,
  updateProfessional,
};
