const express = require("express");
const { sendWhatsappMessage } = require("./whatsapp.controller");

const whatsappRouter = express.Router();

whatsappRouter.post("/send-whatsapp-message", sendWhatsappMessage);

module.exports = whatsappRouter;
