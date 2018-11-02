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


import HomeContainer from "./components/HomeContainer.jsx"
import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create






axios.get(getCookieValue).then((res) => {
  console.log(res);
  ReactDOM.render(
		<Provider store={store}>
    <div>
      <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Sign in to edit and vote</a>
      <br /> {/*fix this whole section to conditionally render login or logout using a navigation bar  also make it such that when you log in, you automatically redirect to your last seen page not the homepage*/}
      <a href={authRoutesString.generalRoutesString.logout}> Logout </a>
      <HomeContainer loggedInUserData={res.data} />
    </div>
	</Provider>
    ,document.getElementById("app"))
});
