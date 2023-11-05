const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const expressSession = require("express-session");

require("./config/passport-config")(passport);

const api = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.COOKIE_KEY_1, // Replace with a strong secret key
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 24 * 60 * 60 * 1000, // Session duration in milliseconds
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1", api);

module.exports = app;
