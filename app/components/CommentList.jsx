var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import Comment from "./Comment.jsx";

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            loggedInUserStatus: props.loggedInUserStatus,
            slide: props.slide
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(
            {
            type: nextProps.type,
            loggedInUserStatus: nextProps.loggedInUserStatus,
            slide: nextProps.slide
            }
        )
    }

    //get the correct list of comments from MongoDb using the type and the slide
    //Limit the number to 3. If they press load more, give them more that you download on the fly - find out how to do this
    //Practice react-infinite scroller and react-vote on separate projects to get the feel for them
    render(){
        return (
            <div>
                List of comments for {this.state.slide}
                <Comment content={"test"}/>
                <button>Load more</button>
            </div>
        )
    }
}