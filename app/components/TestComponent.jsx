var React = require("react");
import {connect} from "react-redux";
import {setTimeExample} from "./../actions/actions.jsx";

class Test extends React.Component {
  constructor(props){
    super(props);
    this.dispatchTestAction = this.dispatchTestAction.bind(this);
  }

  dispatchTestAction(){
    this.props.dispatch(setTimeExample());
  }

  render(){
    return (
      <div>
        <h1 onClick={this.dispatchTestAction}>Click Me</h1>
      </div>
    )
  }
}


export default connect(state => state)(Test);
