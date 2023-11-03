const express = require("express");
const whatsappRouter = require("./whatsapp/whatsapp.router");

const api = express.Router();

api.use(whatsappRouter);

module.exports = api;
