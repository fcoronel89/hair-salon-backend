const express = require("express");
const {
  createNewClient,
  findClientByPhone,
  findClientById,
  getAllClients,
} = require("./client.controller");
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
clientRouter.get("/client/:clientId", checkLoggedIn, findClientById);
clientRouter.get("/allClients", checkLoggedIn, getAllClients);

module.exports = clientRouter;
