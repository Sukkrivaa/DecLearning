var React = require("react");
var Component = React.Component;

export default class AboutUs extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className={"AboutUs-Container"}>
                This is where the text for About Us will go
            </div>
        )
    }
}