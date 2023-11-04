const fs = require("fs");
const https = require("https");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3000; // Choose a suitable port

const server = https.createServer(
  {
    key: fs.readFileSync("src/key.pem"),
    cert: fs.readFileSync("src/cert.pem"),
  },
  app
);

async function startsServer() {
  server.listen(port, () => {
    console.log(`Server is runing in http://localhost:${port}`);
  });
}

startsServer();
