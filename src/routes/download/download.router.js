const express = require("express");
const { downloadDbBackup } = require("./download.controller");
const { checkLoggedIn, checkIsAdmin } = require("../auth/auth.controller");

const downloadRouter = express.Router();

downloadRouter.get(
  "/download-db-backup",
  checkLoggedIn,
  checkIsAdmin,
  downloadDbBackup
);

module.exports = downloadRouter;
