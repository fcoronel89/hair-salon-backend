const express = require("express");
const whatsappRouter = require("./whatsapp/whatsapp.router");
const authRouter = require("./auth/auth.router");
const userRouter = require("./user/user.router");
const professionalRouter = require("./professional/professional.router");
const shiftRouter = require("./shift/shift.router");

const api = express.Router();

api.use(whatsappRouter);
api.use(authRouter);
api.use(userRouter);
api.use(professionalRouter);
api.use(shiftRouter);
api.get("/", (req, res) => {
  const htmlResponse = `
      <html>
        <head>
          <title>NodeJs y Express en Vercel</title>
        </head>
        <body>
          <h1>Soy un proyecto Back end en vercel</h1>
          <a href='auth/google'>Login</a>
          <a href='auth/logout'>Logout</a>
        </body>
      </html>
    `;
  console.log("home");
  return res.send(htmlResponse);
});

module.exports = api;
