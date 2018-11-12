global.__rootdir = __dirname;
require("dotenv").config();
const debug = require("debug")("app_startup");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { errors } = require("celebrate");

const app = new express();

if (app.get("env") === "development") app.use(morgan("tiny"));
app.use(express.json());

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
