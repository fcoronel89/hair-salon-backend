const mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URI;

mongoose.connection.once("open", () => {
  debug("MongoDB connection ready");
});

mongoose.connection.on("error", (error) => {
  debug("MongoDB connection error:", error);
});

async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (error) {
    debug("MongoDB connection error during connection:", error);
  }
}

async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    debug("MongoDB connection error during disconnection:", error);
  }
}

module.exports = { mongoConnect, mongoDisconnect };
