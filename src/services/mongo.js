const mongoose = require("mongoose");

require('dotenv').config();

const MONGO_URL =process.env.MONGO_URI;

mongoose.connection.once("open", () => {
  console.log("Mongo db connection ready");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
