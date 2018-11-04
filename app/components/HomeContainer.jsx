var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import SubtopicList from "./SubtopicList.jsx";
import HigherOrderContentContainer from "./HigherOrderContentContainer.jsx";

class HomeContainer extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.loggedInUserData = props.loggedInUserData;
    this.renderEditorwithActiveContent = this.renderEditorwithActiveContent.bind(this);
  }



  renderEditorwithActiveContent(){
    //Render the editor only if the active state is not ""
    var activeBool = this.props.activeSubtopic !== ""; //Need to change this to show "General in the future"
    //Add a case where editing is active then return quill editor else return non-editable container
    if(activeBool){
      return (
        <div>
          <SubtopicList />
          <HigherOrderContentContainer loggedInUserData={this.loggedInUserData}/>
        </div>

    )

  } else{
      return (
        <div>
          <SubtopicList />
        </div>
      )
    }
  }

  render(){

    return (
      <div>
        {this.renderEditorwithActiveContent()}
      </div>
    )
  }
}

export default connect((state) => state)(HomeContainer)
