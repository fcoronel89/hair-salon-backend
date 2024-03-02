const express = require("express");
const { downloadDbBackup } = require("./backup.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");
const { backupMongoDB, restoreMongoDB } = require("../../cron");

const backupRouter = express.Router();

backupRouter.get(
  "/download-db-backup",
  checkLoggedIn,
  checkIsAdmin,
  downloadDbBackup
);

backupRouter.get(
  "/create-db-backup",
  checkLoggedIn,
  checkIsAdmin,
  backupMongoDB
);

backupRouter.get(
  "/restore-db-backup",
  checkLoggedIn,
  checkIsAdmin,
  restoreMongoDB
);

module.exports = backupRouter;
