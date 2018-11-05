import axios from "axios";
import {setInitialSubtopicsState} from "./actions.jsx";
const mongoRoutesString = require("./../../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;

export function getInitialSubtopics(){
  return (dispatch) => {

    axios.get(mongoRoutesString.getInitialSubtopics).then((res) => {
      dispatch(setInitialSubtopicsState(res.data)); //still need to define this
    }).catch((e) => {
      console.log("Error when getting initial Subtopics: ", e)
    });
  }
}

export function pushProblemsMongo(problem, activeSubtopic){
  return () => {
    axios.post(mongoRoutesString.pushProblems, {problem, activeSubtopic}).then(() => {
      console.log("pushed problem successfully")
    }).catch((e)=> {
      throw new Error(e);
    })
  }
}

export function pushRequestsMongo(request, activeSubtopic){
  return () => {
    axios.post(mongoRoutesString.pushRequests, {request, activeSubtopic}).then(() => {
      console.log("pushed request successfully")
    }).catch((e)=> {
      throw new Error(e);
    })
  }
}

export function pushChangesMongo(subtopic, content, loggedInUserData){
  console.log("this ran too")
  return () => {
    axios.post(mongoRoutesString.pushChanges, {subtopic, content, loggedInUserData}).then(() => {
      console.log("pushed changes successfully");
    }).catch((e) => {
      console.log("this ran")
      throw new Error(e);
    })
  }
}
