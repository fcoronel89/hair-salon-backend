const path = require("path");
const fs = require("fs");
require("dotenv").config();

function downloadDbBackup(req, res) {
  const dbName = process.env.MONGO_DBNAME;
  const downloadFolderPath = path.resolve(__dirname, "..", "..", "db-backup");
  const filePath = path.join(downloadFolderPath, `${dbName}.gzip`); // Replace with the actual path to the backup file in the database folder ("db-backup/beawake.gzip");

  // Stream the file to the response
  const fileStream = fs.createReadStream(filePath);
  res.setHeader("Content-Type", "application/gzip");
  res.setHeader("Content-Disposition", `attachment; filename=${dbName}.gzip`);
  fileStream.pipe(res);
}

module.exports = {
  downloadDbBackup,
};
