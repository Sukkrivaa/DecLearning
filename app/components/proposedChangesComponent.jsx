var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
const axios = require("axios");
const mongoRoutesString = require("./../../config/magicStrings").Routes.apiRoutesString.mongoRoutesString; 

class proposedChangesComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: "new",
            changes: []
        }
    }

    componentWillMount(){
        var self = this
        var type = this.state.type;
        axios.get(mongoRoutesString.getNewChanges).then((res)=>{
            console.log(res);
            self.setState({
                changes: res.data
            })
        }).catch((e) => {
            console.log(e);
            console.log("this ran")
        })
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    render(){
        return (
            <div>
                Test
            </div>
        )
    }
}

export default connect(state => state)(proposedChangesComponent)