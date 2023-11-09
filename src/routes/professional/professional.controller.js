const professionalModel = require("../../models/professional.model");

async function createNewProfessional(req, res) {
  try {
    await professionalModel.createProfessional(req.body);
    res.status(201).json({ message: "professional created successfull" });
  } catch (err) {
    res.status("400").json({ error: err });
  }
}

async function updateProfessional(req, res) {
  try {
    const professionalId = req.params.professionalId;
    const updatedProfessionalData = req.body;
    const updatedProfessional =await professionalModel.updateProfessional(
      professionalId,
      updatedProfessionalData
    );
    return res.status(200).json({ ok: true, professional: updatedProfessional });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createNewProfessional,
  updateProfessional,
};
