const express = require("express");
const { createNewProfessional } = require("./professional.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const professionalRouter = express.Router();

professionalRouter.post(
  "/professional",
  checkLoggedIn,
  checkIsAdmin,
  createNewProfessional
);

module.exports = professionalRouter;
