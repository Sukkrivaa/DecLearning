const MongoPromise = require("./MongoPromise");

module.exports = {
  getInitialSubtopics: (req,res) => {
    MongoPromise.getInitialSubtopics().then((currentSubtopics) => {
      console.log("Successfully got Subtopics from MongoDB");
      res.send(currentSubtopics);
    }).catch((e) => {
      console.log("Error when getting initial Subtopics after the api call: ", e);
    });
  }
}
