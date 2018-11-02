var React = require("react");
var Component = React.Component;
import ReactQuill from "react-quill";

export default class Comment extends Component {
    constructor(props){
    super(props);
    this.content = props.content
    }

    render(){
        return (
            <div>
            <ReactQuill
            value={this.content}
            readOnly={true}
            modules={{toolbar:false}}
       />
            </div>
        )
    }
}