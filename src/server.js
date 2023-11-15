const fs = require("fs");
const https = require("https");
const http = require('http');
const app = require("./app");

require("dotenv").config();

const { mongoConnect } = require("./services/mongo");

const port = process.env.PORT || 3000; // Choose a suitable port

if (process.env.NODE_ENV === 'production') {
  // Running in production, use regular HTTP
  server = http.createServer(app);
} else {
  // Running in development, use HTTPS with your own certificates
  server = https.createServer(
    {
      key: fs.readFileSync("src/key.pem"),
      cert: fs.readFileSync("src/cert.pem"),
    },
    app
  );
}

async function startsServer() {
  await mongoConnect();
  server.listen(port, () => {
    console.log(`Server is runing in http://localhost:${port}`);
  });
}

startsServer();
