var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import QuillEditor from "./QuillEditor.jsx";
import EditableQuillEditor from "./EditableQuillEditor.jsx";
import VoteSubcomponents from "./VoteSubcomponents.jsx";

export default class HigherOrderContentContainer extends Component {
  constructor(props){
    super(props);
    this.renderSlide = this.renderSlide.bind(this);
    this.handleRequestButtonClick = this.handleRequestButtonClick.bind(this);
    this.handleProblemButtonClick = this.handleProblemButtonClick.bind(this);
    this.handleContentButtonClick = this.handleContentButtonClick.bind(this);
    this.loggedInUserData = props.loggedInUserData;
    this.state = {
      slide: "content"
    }
  }

  handleContentButtonClick(){
    this.setState({
      slide: "content"
    })
  }

  handleRequestButtonClick(){
    this.setState({
      slide: "requests"
    })
  }

  handleProblemButtonClick(){
    this.setState({
      slide: "problems"
    })
  }

  renderSlide(){
    var slide = this.state.slide
    if(slide === "content"){
      return (
        <div>
          <button onClick={this.handleRequestButtonClick}>requests</button>
          <button onClick={this.handleProblemButtonClick}>problems</button>
          <QuillEditor />
        </div>
    )
    }else if(slide === "requests"){
      //Pass down the user data here so that we can conditionally render
      //People will only see the upvote downvote buttons if they are logged in - else they just see normal textboxes
      return (
        <div>
          <button onClick={this.handleContentButtonClick}>Content</button>
          <button onClick={this.handleProblemButtonClick}>problems</button>
          <EditableQuillEditor slide={"requests"} loggedInUserData={this.loggedInUserData} />
          <VoteSubcomponents slide={"requests"} loggedInUserData={this.loggedInUserData}/>
          */}
        </div>
      )
    }else if(slide === "problems"){
      return (
        <div>
          <button onClick={this.handleContentButtonClick}>Content</button>
          <button onClick={this.handleRequestButtonClick}>requests</button>
          <EditableQuillEditor slide={"problems"} loggedInUserData={this.loggedInUserData}/>
          <VoteSubcomponents slide={"problems"} loggedInUserData={this.loggedInUserData}/>
        </div>)
    }
  }


  render(){
    return (
      <div>
        {this.renderSlide()}
      </div>
    )
  }

}
