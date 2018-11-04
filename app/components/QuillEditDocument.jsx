var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import {QuillDeltaToHtmlConverter} from "quill-delta-to-html";
import ReactQuill from "react-quill";
var $ = require("jquery");
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");



class QuillEditDocument extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeSubtopicEdit: props.subtopics[0],
            delta: JSON.parse(props.subtopics[0].content)
        }
        this.renderSubs = this.renderSubs.bind(this);
        this.changeActiveSub = this.changeActiveSub.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(content, delta, source, editor) {
        this.setState({ delta: content })
      }

    changeActiveSub(subtopic){
        var self = this
        return function(){
            self.setState({
                activeSubtopicEdit: subtopic,
                delta: JSON.parse(subtopic.content)
            })
        }
         
    }

    renderSubs(){
        var subtopics = this.props.subtopics
        var array =  subtopics.map((subtopic, index) => {
            return (
                <div onClick={this.changeActiveSub(subtopic)} key={index}>
                    <h1>{subtopic.subtopic}</h1>
                </div>
            )
        })
        return array;
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
        var deltaOps = this.state.delta.ops
        var converter = new QuillDeltaToHtmlConverter(deltaOps, {});
        var html =  converter.convert();

        $("#downloadLink").click(function(){
            downloadInnerHtml(fileName, html);
        });
        return (
            <div>
                <Link to="/"><p>Content</p></Link>
                {this.renderSubs()}
                <ReactQuill value={this.state.delta}
                      onChange={this.handleChange} />
                <div id="downloadLink"><p>Download html</p></div>
            </div>
        )
    }
}

export default connect(state => state)(QuillEditDocument)