const express = require("express");
const whatsappRouter = require("./whatsapp/whatsapp.router");
const authRouter = require("./auth/auth.router");

const api = express.Router();

api.use(whatsappRouter);
api.use(authRouter);
api.get("/", (req, res) => {
  const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
          <h1>Soy un proyecto Back end en vercel</h1>
          <a href='v1/auth/google'>Login</a>
        </body>
      </html>
    `;
  return res.send(htmlResponse);
});

module.exports = api;
