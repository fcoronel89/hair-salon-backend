const express = require("express");
const { createNewClient } = require("./client.controller");
const { checkLoggedIn, checkIsAdminOrSeller } = require("../auth/auth.controller");

const clientRouter = express.Router();

clientRouter.post("/client", checkLoggedIn, checkIsAdminOrSeller, createNewClient);

module.exports = clientRouter;
