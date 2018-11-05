var React = require("react");
import {connect} from "react-redux";
import {getInitialSubtopics} from "./../actions/mongoActions.jsx";
import Subtopic from "./Subtopic.jsx";
import {changeActiveSubtopic} from "./../actions/actions.jsx";

class SubtopicList extends React.Component {
  //This component has a position of fixed at the side

  constructor(props){
    super(props);
    this.handleSubtopicClick= this.handleSubtopicClick.bind(this);
    this.renderSubtopics = this.renderSubtopics.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(getInitialSubtopics());
  }

  handleSubtopicClick(text){
		//action to change the active state
		return function(){
			this.props.dispatch(changeActiveSubtopic(text));
		};
	}

  renderSubtopics(){
   var subtopics = this.props.subtopics;
   return subtopics.map((subtopic, index) => {
     return (
        <Subtopic text={subtopic.subtopic} key={index} handleSubtopicClick={this.handleSubtopicClick(subtopic.subtopic)}/>
     );
   });
 }


  render(){
    return (
      <div className={"side-nav-div"}>
        <ul className={"side-nav"}>
          {this.renderSubtopics()}
        </ul>
      </div>
    )
  }
}


export default connect(state => state)(SubtopicList);
