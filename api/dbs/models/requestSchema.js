const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema and Model

const RequestSchema = new Schema({
	request: String,
	userID: Number,
  time: Number,
  votes: Number,
  subtopic: String
});

const Request = mongoose.model("request", RequestSchema);

module.exports = Request;
