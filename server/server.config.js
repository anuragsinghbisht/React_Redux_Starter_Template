module.exports = {
  port: process.env.PORT || 8080,
  host: "localhost",
  db: {
    uri: "mongodb://<username>:<password>@<ip_address>:<port>/<db_name>"
  }
};
