const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./server/server.config");
const routes = require("./server/routes/index.route");
const app = express();

// connect to the database
mongoose.connect(config.db.uri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api", routes);
app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(config.port, () => {
  console.log(`Server started`);
});
