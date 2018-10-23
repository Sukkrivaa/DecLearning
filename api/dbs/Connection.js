const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const MongoDBURI = require("./../../config/keys").MongoDBURI;

mongoose.connect(MongoDBURI, {useNewUrlParser: true});

mongoose.connection.once("open", () => {
  console.log("Connection Successful");
}).on("error", (e) => {
  console.log("connection error: ", e);
});

module.exports = mongoose.connection;
