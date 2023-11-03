const http = require("http");
const app = require("./app");

require("dotenv").config();

const port = process.env.PORT || 3000; // Choose a suitable port

const server = http.createServer(app);

async function startsServer() {
  server.listen(port, () => {
    console.log(`Server is runing in http://localhost:${port}`);
  });
}

startsServer();
