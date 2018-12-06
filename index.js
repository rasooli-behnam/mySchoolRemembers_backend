global.__rootdir = __dirname;
require("dotenv").config();
const cors = require("cors");
const debug = require("debug")("app_startup");
const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { errors } = require("celebrate");

Joi.objectId = require("joi-objectid")(Joi);

const app = new express();

if (app.get("env") === "development") app.use(morgan("tiny"));
app.use(express.json());

var corsOptions = {
  origin: "http://my-school-remembers-frontend.appspot.com",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use("/api", require("./routes"));

mongoose
  .connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true }
  )
  .then(() => {
    debug("connection stablished!");
  })
  .catch(err => {
    console.log(err);
  });

app.use(errors());

const port = process.env.PORT || 8080;
app.listen(port, debug(`Listening on port ${port}...`));
