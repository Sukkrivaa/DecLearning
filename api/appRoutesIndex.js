const MongoMethods = require("./dbs/MongoMethods");
const mongoRoutesString = require("./../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;

const Index = (app) => {
  app.get(mongoRoutesString.getInitialSubtopics, MongoMethods.getInitialSubtopics);
  app.post(mongoRoutesString.pushProblems, MongoMethods.pushProblems);
  app.post(mongoRoutesString.pushRequests, MongoMethods.pushRequests);
  app.post(mongoRoutesString.pushChanges, MongoMethods.pushChanges);
  app.get(mongoRoutesString.getNewChanges, MongoMethods.getNewChanges);
  app.get(mongoRoutesString.getResolvedChanges, MongoMethods.getResolvedChanges)
}

module.exports = Index;
