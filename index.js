global.__rootdir = __dirname;
require("dotenv").config();
const debug = require("debug")("app_startup");
const express = require("express");
const morgan = require("morgan");

const app = new express();

if (app.get("env") === "development") app.use(morgan("tiny"));
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, debug(`Listening on port ${port}...`));
