const db = require("./Connection.js");
const Subtopic = require("./models/subtopicSchema");


const MongoPromise = {
  getInitialSubtopics: () => {
    return new Promise((resolve,reject) => {

      Subtopic.find({}).then((result) => {
        resolve(result);
      }).catch(() => {
        console.log("error here when trying to find initial subtopics");
        reject();
      });
    });
  }
}

module.exports = MongoPromise
