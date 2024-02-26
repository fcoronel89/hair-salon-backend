const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");
const cron = require("node-cron");
const { backupMongoDB, restoreMongoDB } = require("./cron");

require("./config/passport-config")(passport);

const api = require("./routes/api");
const cookieMaxAge = 60 * 24 * 60 * 60 * 1000; // Session duration in milliseconds

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.set("trust proxy", 1);

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.COOKIE_KEY_1,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: cookieMaxAge, 
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/v1", api);

// Scheduling the backup everyday at 00:00:00 (using node-cron) 0 0 * * *
// cron.schedule("*/5 * * * *", () => {
//   try {
//     backupMongoDB();
//   } catch (error) {
//     console.error('Error during backup:', error);
//   }
// });
//restoreMongoDB();

module.exports = app;
