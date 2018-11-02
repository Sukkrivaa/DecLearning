const db = require("./Connection.js");
const Subtopic = require("./models/subtopicSchema");
const Problem = require("./models/problemSchema");
const Request = require("./models/requestSchema");
const moment = require('moment');


const MongoPromise = {
  getInitialSubtopics: () => {
    return new Promise((resolve,reject) => {

      Subtopic.find({}).then((result) => {
        resolve(result);
      }).catch(() => {
        throw Error("Could not find any subtopcis")
        reject();
      });
    });
  },
  pushProblems: (pushedProblem, activeSubtopic) => {
    return new Promise((resolve, reject) => {
      var problem = new Problem({ //Change this in the future to add the userID
        problem: pushedProblem,
        time: moment().unix(),
        subtopic: activeSubtopic,
        votes: 0
      });

      problem.save().then((res) => {
        resolve(res);
      }).catch((e) => {
        reject(e);
        throw new Error("Something went wrong when saving a new problem")
      });
    })
  },
  pushRequests: (pushedRequest, activeSubtopic) => {

    return new Promise((resolve, reject) => {
      var request = new Request({ //Change this in the future to add the userID
        request: pushedRequest,
        time: moment().unix(),
        subtopic: activeSubtopic,
        votes: 0
      });

      request.save().then((res) => {
        resolve(res);
      }).catch((e) => {
        reject(e);
        throw new Error("Something went wrong when saving a new request")
      });
    })
  }
}

module.exports = MongoPromise
