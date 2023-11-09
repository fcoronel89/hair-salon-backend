const express = require("express");
const {
  createNewProfessional,
  updateProfessional,
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

module.exports = professionalRouter;
