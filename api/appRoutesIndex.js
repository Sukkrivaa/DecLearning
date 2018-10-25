const MongoMethods = require("./dbs/MongoMethods");
const mongoRoutesString = require("./../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;

const Index = (app) => {
  app.get(mongoRoutesString.getInitialSubtopics, MongoMethods.getInitialSubtopics);
}

module.exports = Index;
