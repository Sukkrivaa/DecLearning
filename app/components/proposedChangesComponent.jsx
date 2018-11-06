var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
const axios = require("axios");
const mongoRoutesString = require("./../../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;
import ChangeDiff from "./ChangeDiff.jsx";

class proposedChangesComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: "new",
            changes: [], //subtopic is passed down from a greater component,
            sort: "popularity"
        }
        this.renderChanges = this.renderChanges.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    componentWillMount(){
        var self = this
        var type = this.state.type;
        if(type == "new"){
            axios.get(mongoRoutesString.getNewChanges).then((res)=>{
                //Change this to post so you can filter for subtopic;
                self.setState({
                    changes: res.data
                })
            }).catch((e) => {
                throw Error(e);
            })
        }else{
            axios.get(mongoRoutesString.getResolvedChanges).then((res) => {
                self.setState({
                    changes: res.data
                })
            })
        }
       
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    renderChanges(){
        var array = this.state.changes;
        var sortedArray = array.map((elem, index) => {
            return (
                <div key={index}>
                    <ChangeDiff changeHTML={elem.content} username={elem.personID} status={elem.status}/>
                </div>
            )
        })

        return sortedArray;
    }

    handleClick(){
        var self = this;
        if(this.state.type == "new"){
            axios.get(mongoRoutesString.getResolvedChanges).then((res) => {
                var array = res.data.sort((a,b)=>{
                    return (b.time - a.time)
                })
                self.setState({
                    type: "resolved",
                    changes: array
                })
            })
        }
        
    }

    handleClick2(){
        var self = this;
        axios.get(mongoRoutesString.getNewChanges).then((res)=>{
            //Change this to post so you can filter for subtopic;
            var array = res.data.sort((a,b)=>{
                return (b.votes - a.votes)
            })
            self.setState({
                type: "popularity",
                changes: array
            })
        }).catch((e) => {
            throw Error(e);
        })
    }

    handleClick3(){
        var self = this;
        axios.get(mongoRoutesString.getNewChanges).then((res)=>{
            //Change this to post so you can filter for subtopic;
            var array = res.data.sort((a,b) => {
                return (b.time - a.time)
            })
            self.setState({
                type: "new",
                changes: array
            })
        }).catch((e) => {
            throw Error(e);
        })
    }

    render(){
        //QuillJS where we pass in the manipulated html-diff html for each element in the array - wrapped in a div to show current status
        //Add a voting component by tomorrow - only members vote
        //In the future, we need the ability to report for spam
        //This is jus the side component - the subtopic list is still at the side
        return (
            <div>
                {this.renderChanges()}
                <button onClick={this.handleClick}>Resolved</button>
                <button onClick={this.handleClick2}>Popular</button>
                <button onClick={this.handleClick3}>New</button>
            </div>
        )
    }
}

export default connect(state => state)(proposedChangesComponent)