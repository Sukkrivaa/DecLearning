const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema and Model

const proposedChangeSchema = new Schema({
	personID: String,
	time: Number,
    content: String,
    votes: Number,
    subtopic: String
});

const proposedChange= mongoose.model("proposedChange", proposedChangeSchema);

module.exports = proposedChange;