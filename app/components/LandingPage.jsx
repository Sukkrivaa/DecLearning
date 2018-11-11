var React = require("react");
var Component = React.Component;
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");

export default class LandingPage extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <Link to="/main"><div className={"subject"}>Physics</div></Link> {/*Change this to an image with thw word physics on top - create using photoshop*/}
                <div className={"subject"}>Chemistry</div>
                <div className={"subject"}>Math</div>
                <div className={"subject"}>Computer Science</div>
            </div>
        )
    }
}