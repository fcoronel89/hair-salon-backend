const express = require("express");
const { createServices, getServices } = require("./service.controller");
const { checkLoggedIn } = require("../auth/auth.controller");

const serviceRouter = express.Router();

//serviceRouter.get("/services/create", createServices); Use for create when need to initialize the Database
serviceRouter.get("/services", checkLoggedIn, getServices);

module.exports = serviceRouter;
