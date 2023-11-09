const { createProfessional } = require("../../models/professional.model");

async function createNewProfessional(req, res) {
  try {
    await createProfessional(req.body);
    res.status(201).json({ message: "professional created successfull" });
  } catch (err) {
    res.status("400").json({ error: err });
  }
}

module.exports = {
    createNewProfessional
}