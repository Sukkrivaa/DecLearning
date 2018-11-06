var React = require("react");
var Component = React.Component;
var ReactQuill = require("react-quill");

export default class changeDiff extends Component {
    constructor(props){
        super(props);
        this.state = {
            changeHTML: props.changeHTML,
            username: props.username,
            status: props.status
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            changeHTML: props.changeHTML,
            username: props.username,
            status: props.status
        })
    }

    render(){
        return (
            <div className={this.state.status}>
                <p>{this.state.username}</p>
                <ReactQuill defaultValue={this.state.changeHTML} readOnly={true}
        modules={{toolbar:false}}/>
            </div>
        )
    }





}