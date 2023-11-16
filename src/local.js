const fs = require("fs");
const https = require("https");
const app = require("./app");

require("dotenv").config();

const { mongoConnect } = require("./services/mongo");

const port = process.env.PORT || 3000; // Choose a suitable port
let server;

async function startServer() {
  try {
    // Establish MongoDB connection
    await mongoConnect();

    // Running in development, use HTTPS with your own certificates
    server = https.createServer(
      {
        key: fs.readFileSync("src/key.pem"),
        cert: fs.readFileSync("src/cert.pem"),
      },
      app
    );

    // Start the server
    server.listen(port, () => {
      console.log(`Server is running in http://localhost:${port}`);
    });

    //return server; // Return the server instance
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application on connection error
  }
}

startServer();
