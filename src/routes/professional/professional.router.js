const express = require("express");
const {
  createNewProfessional,
  updateProfessional,
  findProfessionalById,
  getAllProfessionals,
} = require("./professional.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const professionalRouter = express.Router();

professionalRouter.post(
  "/professional",
  checkLoggedIn,
  checkIsAdmin,
  createNewProfessional
);

professionalRouter.put(
  "/professional/:professionalId",
  checkLoggedIn,
  checkIsAdmin,
  updateProfessional
);

professionalRouter.get(
  "/professional/:professionalId",
  checkLoggedIn,
  findProfessionalById
);

professionalRouter.get(
  "/professionals",
  checkLoggedIn,
  getAllProfessionals,
);

module.exports = professionalRouter;
