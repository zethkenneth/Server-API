const express = require('express')
const cors = require('cors')
const apiRoutes = require("./src/routes.js");
const app = express();


//Set cross platform calls
app.use(cors());
// Setup middleware for parsing application/json
app.use(express.json({ limit: "200mb" }));
// Setup middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let d = new Date();

app.get("/", (req, res) => {
  res.status(200).send(`Healthy since ${d.toString()}`);
});

app.use("/v1/server", apiRoutes);

app.use("*", function (req, res) {
  res.send("NOT FOUND");
});

module.exports = app;