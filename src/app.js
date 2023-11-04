const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");

const api = require("./routes/api");

require("dotenv").config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(passport.initialize());

app.use("/v1", api);

module.exports = app;
