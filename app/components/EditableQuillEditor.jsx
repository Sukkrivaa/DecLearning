const React = require('react');
const Component = React.Component;
import {connect} from "react-redux";
import ReactQuill from "react-quill";
import {pushProblemsMongo, pushRequestsMongo} from "./../actions/mongoActions.jsx";


class EditableQuillEditor extends Component {
  constructor(props) {
    super(props)
    // this.loggedInUserData = props.loggedInUserData;
    this.state = { delta: '', slide: props.slide, loggedInUserData: props.loggedInUserData} // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.handlePush = this.handlePush.bind(this);
    this.conditionalRenderBasedOnLoggedInStatus = this.conditionalRenderBasedOnLoggedInStatus.bind(this);
  }

  handleChange(content, delta, source, editor) {
    this.setState({ delta: content })
  }

  componentWillReceiveProps(nextProps){
    this.setState({slide: nextProps.slide , loggedInUserData: nextProps.loggedInUserData })
  }

  handlePush(){
    if(this.state.slide === "problems"){
      this.props.dispatch(pushProblemsMongo(this.state.delta, this.props.activeSubtopic)); //Wire up these 2
      this.setState({
        delta: ""
      })
      alert("Problem Recorded!");
    }else{
      this.props.dispatch(pushRequestsMongo(this.state.delta, this.props.activeSubtopic));
      this.setState({
        delta: ""
      })
      alert("Request Recorded!");
    }
  }

  conditionalRenderBasedOnLoggedInStatus(){

    if(this.state.loggedInUserData !== null && typeof this.state.loggedInUserData === "object"){
      return (
        <div>
          <h3 className={"submit-problem"}>Submit {this.state.slide} ({this.props.activeSubtopic})</h3>
          <ReactQuill value={this.state.delta}
                      onChange={this.handleChange} className={"reactquill"} modules={EditableQuillEditor.modules}
                      formats={EditableQuillEditor.formats}/>
          <button onClick={this.handlePush} className={"button success submit-problem-button"}> Submit {this.state.slide} </button>
        </div>
      )
    }else{
      return (
        <div data-alert className={"panel callout loginstopper"}>You need to be logged in to submit {this.state.slide}. Click the "content" button in the navigation bar to get back to the content.</div>
      )
    }

  }

  render() {
    return (
      <div>{this.conditionalRenderBasedOnLoggedInStatus()}</div>
    )
  }
}


EditableQuillEditor.modules = {
  toolbar: [
    [{ "header": "1"}, {"header": "2"}, { "font": [] }],
    [{size: []}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{"list": "ordered"}, {"list": "bullet"},
     {"indent": "-1"}, {"indent": "+1"}],
    ["link", "image", "video", "formula"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
};

EditableQuillEditor.formats = [
  "header", "font", "size",
  "bold", "italic", "underline", "strike", "blockquote",
  "list", "bullet", "indent",
  "link", "image", "video", "formula"
];


export default connect(state => state)(EditableQuillEditor)
