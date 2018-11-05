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
                <div data-sticky-container>
                    <div className={"title-bar black-top-bar"} data-sticky data-options="marginTop:0;">
                        <div className={"title-bar-left"}>
                            <h4 className={"DecLearning-title"}>DecLearning</h4>
                            <h5 className={"subject-title"}>The open source physics textbook</h5>
                        </div>
                        <div className={"title-bar-right"}>
                            <Link to="/download" className={"Download-Link"}>Download Contents</Link>
                            <Link to="/changes" className={"Download-Link"}>Changed</Link>
                            <a href={authRoutesString.generalRoutesString.logout} className={"auth-link"}>Logout</a>
                            
                        </div>
                    </div>
                </div>
                
            )
        }else{
            return (
                <div data-sticky-container>
                    <div className={"title-bar black-top-bar"} data-sticky data-options="marginTop:0;">
                        <div className={"title-bar-left"}>
                            <h4 className={"DecLearning-title"}>DecLearning</h4>
                            <h5 className={"subject-title"}>The open source textbook</h5>
                        </div>
                        <div className={"title-bar-right"}>
                            <Link to="/download" className={"Download-Link"}>Download Contents</Link>
                            <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial} className={"auth-link"}> Login </a>
                            
                        </div>
                    </div>
                </div>
                
            )
            }
    }
}