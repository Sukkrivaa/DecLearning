const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema and Model

const ProblemSchema = new Schema({
	problem: String,
	userID: Number,
  time: Number,
  votes: Number,
  subtopic: String
});

const Problem = mongoose.model("problem", ProblemSchema);

module.exports = Problem;
