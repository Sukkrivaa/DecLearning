var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;
import ReactQuill from "react-quill";

class QuillEditor extends Component {
  //need to set it such that the state changes when the actiev part changes
  constructor(props){
    super(props);
  }

  renderQuillInitial(){
    var deltaValue = this.props.subtopics.filter(obj => {
      return obj.subtopic == this.props.activeSubtopic;
    })[0].content;
    return (
      <ReactQuill
        value={JSON.parse(deltaValue)}
        readOnly={true}
        modules={{toolbar:false}}
       />
    );
  }

  render(){
    return (
      <div>
        <h2>{this.props.activeSubtopic}</h2>
        {this.renderQuillInitial()}
      </div>
    );
  }

}

export default connect(state => {return {activeSubtopic: state.activeSubtopic, subtopics: state.subtopics};})(QuillEditor);
