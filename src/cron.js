const { spawn } = require("child_process");
const path = require("path");
require("dotenv").config();

const dbInfo = {
  host: "cluster0.w2q2qk9.mongodb.net",
  user: process.env.MONGO_DB_USER,
  password: process.env.MONGO_DB_PASSWORD,
  dbName: process.env.MONGO_DBNAME,
};

const ARCHIVE_PATH = path.join(__dirname, "db-backup", `${dbInfo.dbName}.gzip`);
const MONGODB_URI = `mongodb+srv://${dbInfo.user}:${dbInfo.password}@${dbInfo.host}/${dbInfo.dbName}`;

function executeMongoCommand(command, options, successMessage) {
  const child = spawn(command, options);

  child.stdout.on("data", (data) => {
    console.log("stdout:\n", data);
  });
  child.stderr.on("data", (data) => {
    console.log("stderr:\n", Buffer.from(data).toString());
  });
  child.on("error", (error) => {
    console.log("error:\n", error);
  });
  child.on("exit", (code, signal) => {
    if (code) console.log(`Process exit with code: ${code}`);
    else if (signal) console.log(`Process killed with signal: ${signal}`);
    else console.log(`${successMessage} ✅`);
  });
}

function backupMongoDB() {
  const options = [
    `--uri=${MONGODB_URI}`,
    `--db=${dbInfo.dbName}`,
    `--archive=${ARCHIVE_PATH}`,
    "--gzip",
    `--username=${dbInfo.user}`,
    `--password=${dbInfo.password}`,
  ];

  executeMongoCommand("mongodump", options, "Backup is successful");
}

function restoreMongoDB() {
  const options = [
    `--uri=${MONGODB_URI}`,
    `--archive=${ARCHIVE_PATH}`,
    "--gzip",
    "--drop",
    `--username=${dbInfo.user}`,
    `--password=${dbInfo.password}`,
  ];

  executeMongoCommand("mongorestore", options, "Restore is successful");
}

module.exports = { backupMongoDB, restoreMongoDB };
