var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import {QuillDeltaToHtmlConverter} from "quill-delta-to-html";
import ReactQuill from "react-quill";
var $ = require("jquery");
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");
import {pushChangesMongo} from "./../actions/mongoActions.jsx";


class QuillEditDocument extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSubtopicEdit: props.subtopics[0],
            delta: JSON.parse(props.subtopics[0].content),
            content: JSON.parse(props.subtopics[0].content),
            loggedInUserData: props.loggedInUserData,
        }
        this.renderSubs = this.renderSubs.bind(this);
        this.changeActiveSub = this.changeActiveSub.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.contentArray = [];
        this.conditionalRender = this.conditionalRender.bind(this);
    }


    handleClick(activeSubtopicEdit){
        var self =  this
        return function(){
            self.props.dispatch(pushChangesMongo(activeSubtopicEdit.subtopic, self.contentArray[self.contentArray.length-1], self.props.loggedInUserData));
            alert("Your edit has been pushed for review after which it will be added to the main document")
        }
    }
    componentDidUpdate(){
        console.log(this.state);
    }

    handleChange(content, delta, source, editor) {
        this.contentArray.push(content);
      }

    changeActiveSub(subtopic){
        var self = this
        return function(){
            alert("Are you sure you want to change the subtopic? All edits and changes will be lost")
            self.setState({
                activeSubtopicEdit: subtopic,
                delta: JSON.parse(subtopic.content)
            })
        }
         
    }

    renderSubs(){
        //Just get the subtopic list component here
        var subtopics = this.props.subtopics
        var array =  subtopics.map((subtopic, index) => {
            return (
                <div onClick={this.changeActiveSub(subtopic)} key={index}>
                    <p>{subtopic.subtopic}</p>
                </div>
            )
        })
        return array;
    }

    conditionalRender(){
        if(this.state.loggedInUserData !== null && typeof this.state.loggedInUserData === "object"){
            return (
                <div className={"higher-order-content-container-div"}>
                    
                     <div className={"rp-container"}>
                        <div id="downloadLink"><button className={"button rp-button"}>Download html</button></div>
                        <div onClick={this.handleClick(this.state.activeSubtopicEdit)}><button className={"button rp-button"}>Push Changes</button></div>
                     </div>
                     <h3 className={"editH3"}>Edit Document</h3>
                     <ReactQuill value={this.state.delta}
                     onChange={this.handleChange} className={"reactquill editablequill"} modules={QuillEditDocument.modules}
                     formats={QuillEditDocument.formats}/>
                    
                </div>
            )
        }else{
            return (
                <div className={"higher-order-content-container-div"}>
                <div data-alert className={"panel callout"}>You need to be logged in to edit and download the documents</div>
                </div>
            )
        }
    }

    render(){

    function downloadInnerHtml(filename, html) {
        var elHtml = html
        var link = document.createElement('a');
        var mimeType = 'text/html';

        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(elHtml));
        link.click(); 
    }

        var fileName =  this.state.activeSubtopicEdit.subtopic+ '.html'
        // var html = this.contentArray[this.contentArray.length-1];
        // console.log(html);
        // var converter = new QuillDeltaToHtmlConverter(deltaOps, {});
        // var html =  converter.convert();
        var self = this;

        $("#downloadLink").click(function(){
            downloadInnerHtml(fileName, self.contentArray[self.contentArray.length-1]);
        }); //Put this outside to fix the issue where quill loses focus
        return (
            <div> {/*Link to content in the navigation bar */}
                <div className={"side-nav-div"}>
                    <ul className={"side-nav"}>
                    {this.renderSubs()}
                    </ul>
                </div>
                {this.conditionalRender()}
                
            </div>
        )
    }
}

QuillEditDocument.modules = {
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

  QuillEditDocument.formats = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent",
    "link", "image", "video", "formula"
  ];
  

export default connect(state => state)(QuillEditDocument)