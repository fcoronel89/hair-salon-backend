const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const helmet = require("helmet");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");

require("./config/passport-config")(passport);

const api = require("./routes/api");

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Replace with the actual origin of your React app
  credentials: true, // Allow credentials (cookies, sessions)
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(
  expressSession({
    //store: sessionStore, // Use the imported session store
    secret: process.env.COOKIE_KEY_1, // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 24 * 60 * 60 * 1000, // Session duration in milliseconds
    },
    store: MongoStore.create({mongoUrl: process.env.MONGO_URL, collectionName: 'sessions'})
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", api);

module.exports = app;
