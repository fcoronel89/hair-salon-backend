const express = require("express");
const { createNewClient, findClientByPhone } = require("./client.controller");
const {
  checkLoggedIn,
  checkIsAdminOrSeller,
} = require("../auth/auth.controller");

const clientRouter = express.Router();

clientRouter.post(
  "/client",
  checkLoggedIn,
  checkIsAdminOrSeller,
  createNewClient
);
clientRouter.get("/clients", checkLoggedIn, findClientByPhone);

module.exports = clientRouter;
