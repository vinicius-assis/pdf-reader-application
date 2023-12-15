const express = require("express");
const uploadRoute = require("./routes/uploadRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadRoute);

module.exports = app;
