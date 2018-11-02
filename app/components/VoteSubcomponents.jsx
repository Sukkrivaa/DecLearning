var React = require("react");
var Component = React.Component;
import CommentList from "./CommentList.jsx"

export default class VoteSubcomponents extends Component {
    //State transition problem here -fix tomorrow
   constructor(props){
    super(props);
    this.state = {slide: props.slide, type: "popular"}
    this.handleClick = this.handleClick.bind(this);
    this.renderCommentLists =this.renderCommentLists.bind(this);
   } 

   componentWillReceiveProps(nextProps){
       this.setState({slide: nextProps.slide})
   }

   handleClick(type){
       this.setState({
           type
       })
   }

   renderCommentLists(){
       return (
        <div>
            <div>
                <div onClick={this.handleClick("popular")} >
                    Popular
                </div>
                <div onClick={this.handleClick("new")}>
                    New
                </div>
                <div onClick={this.handleClick("resolved")}>
                    Resolved
                </div>
            </div>
            <CommentList type={"Popular"} slide={this.state.slide} loggedInUserStatus={this.props.loggedInUserStatus}/>
            <CommentList type={"New"} slide={this.state.slide}  loggedInUserStatus={this.props.loggedInUserStatus}/>
            <CommentList type={"Resolved"} slide={this.state.slide}  loggedInUserStatus={this.props.loggedInUserStatus}/>
        </div>
       )
   }

   render(){
       //Each commentList is a slide on its own that we can toggle - there will be a mini navigation bar
    return (
        <div>
            {this.renderCommentLists()}
        </div>
    )
   }

}


