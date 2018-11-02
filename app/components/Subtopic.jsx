var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class Subtopic extends Component {
  constructor(props){
    super(props);
    this.handleClick = props.handleSubtopicClick.bind(this);
    this.text = props.text;
  }


  render(){
    return (
      <div>
        <h3 onClick={this.handleClick}>{this.text}</h3>
      </div>
    );
  }
}

export default connect(state => state)(Subtopic)
