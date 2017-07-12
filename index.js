const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./server/server.config");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(config.port, () => {
  console.log(`Server started`);
});
