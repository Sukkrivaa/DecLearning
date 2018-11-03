var React = require("react");
var Component = React.Component;
const authRoutesString = require("./../../config/magicStrings").Routes.authRoutesString
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");

export default class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: props.loggedInUserData
        }
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         loggedIn: nextProps.loggedInUserData
    //     })
    // }

    render(){
        if(this.state.loggedIn !== null && typeof this.state.loggedIn === "object"){
            return (
                <div>
                <a href={authRoutesString.generalRoutesString.logout}> Logout </a>
                <Link to="/download"><p>Download</p></Link>
                </div>
            )
        }else{
            return (
                <div>
                <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Sign in to edit and vote</a>
                <Link to="/download"><p>Download</p></Link>
                </div>
            )
            }
    }
}