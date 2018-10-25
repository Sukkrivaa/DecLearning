const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema and Model

const SubtopicSchema = new Schema({
	subtopic: String,
	order: Number,
  unixUpdated: Number,
	content: String
});

const Subtopic = mongoose.model("subtopic", SubtopicSchema);

module.exports = Subtopic;
