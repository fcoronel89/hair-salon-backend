const app = require('./src/app');
const { mongoConnect } = require('./src/services/mongo');
require("dotenv").config();

const startServer = async () => {
  try {
    // Establish MongoDB connection
    await mongoConnect();

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
