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
