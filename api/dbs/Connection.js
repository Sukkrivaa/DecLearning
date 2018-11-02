const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const MongoDBURI = require("./../../config/keys").MongoDBURI;

mongoose.connect(MongoDBURI, {useNewUrlParser: true});

mongoose.connection.once("open", () => {
  console.log("Connection Successful");
}).on("error", (e) => {
  throw new Error("MongoDB Connection Unsuccessful")
});

module.exports = mongoose.connection;
