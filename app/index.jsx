//Create an app that just logs the user in for now and saves to mongodb and puts that user on the store
var React = require("react");
var ReactDOM = require("react-dom");
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");
var {Provider} = require("react-redux");
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
var axios = require("axios");
var getCookieValue = require("./../config/magicStrings").Routes.authRoutesString.generalRoutesString.getCookieValue;
const authRoutesString = require("./../config/magicStrings").Routes.authRoutesString
store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});
import Test from "./components/TestComponent.jsx"


axios.get(getCookieValue).then((res) => {
  ReactDOM.render(
		<Provider store={store}>
    <div>
      <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Sign in to edit and vote</a>
      <Test />
    </div>
	</Provider>
    ,document.getElementById("app"))
});
