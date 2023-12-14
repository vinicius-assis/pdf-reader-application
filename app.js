const express = require("express");
const uploadRoute = require("./routes/uploadRoute");

const app = express();

app.use(express.json());

app.use(uploadRoute);

module.exports = app;
