//Not to be included in this version


var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
import Comment from "./Comment.jsx";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";

 class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: props.type,
            loggedInUserStatus: props.loggedInUserStatus,
            slide: props.slide,
            comments: []
        }
        this.loadItems = this.loadItems.bind(this);
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

    componentWillMount(){
        var comments = []
        axios.get("/api/loadComments", {slide: this.state.slide, type: this.state.type, subtopic: this.props.activeSubtopic}).then((res) => {
            res.comments.map((comment) => {
                comments.push(<Comment content={comment}/>)
            })
            this.setState({
                comments
            })
        })
    }

    loadItems(){
        if(this.state.comments.length === 0){
            return <div>No Comments</div>
        }else{
            return this.state.comments
        }
    }

    render(){
        return (
            <div>
                List of comments for {this.state.slide}
                {this.loadItems()}
            </div>
        )
    }
}

export default connect(state => state)(CommentList)