const MongoPromise = require("./MongoPromise");

module.exports = {
  getInitialSubtopics: (req,res) => {
    MongoPromise.getInitialSubtopics().then((currentSubtopics) => {
      console.log("Successfully got Subtopics from MongoDB");
      res.send(currentSubtopics);
    }).catch((e) => {
      throw Error("Something wrong when getting initial subtopics from Mongo")
    });
  },
  pushProblems: (req, res) => {
    const {problem, activeSubtopic} = req.body
    MongoPromise.pushProblems(problem, activeSubtopic).then(()=>{
      console.log("Successfully pushed problems on the server side")
      res.send("Sucess"); //Want to clear the quillEditor
    }).catch((e)=>{
      throw Error("Something went wrong when trying to push problems on the server side")
    })
  },
  pushRequests: (req, res) => {
    const {request, activeSubtopic} = req.body
    MongoPromise.pushRequests(request, activeSubtopic).then(()=>{
      console.log("Successfully pushed requests on the server side")
      res.send("Sucess"); //Want to clear the quillEditor
    }).catch((e)=>{
      throw Error("Something went wrong when trying to push requests on the server side")
    })
  }
}
