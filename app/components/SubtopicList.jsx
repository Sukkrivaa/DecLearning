var React = require("react");
import {connect} from "react-redux";
import {getInitialSubtopics} from "./../actions/MongoActions.jsx";

class SubtopicList extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(getInitialSubtopics());
  }


  render(){
    return (
      <div>
        <h1 onClick={this.dispatchTestAction}>Click Me</h1>
      </div>
    )
  }
}


export default connect(state => state)(SubtopicList);
