//Create an app that just logs the user in for now and saves to mongodb and puts that user on the store
var React = require("react");
var ReactDOM = require("react-dom");
var {Route, BrowserRouter, Link, HashRouter, Switch} = require("react-router-dom");
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


import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create
import "style-loader!css-loader!./../node_modules/foundation-sites/dist/css/foundation.min.css";
import "style-loader!css-loader!./styles/base.css";

import NavigationBar from "./components/NavigationBar.jsx";
import HomeContainer from "./components/HomeContainer.jsx";
import QuillEditDocument from "./components/QuillEditDocument.jsx";




axios.get(getCookieValue).then(
  (res) => {

  ReactDOM.render(
		<Provider store={store}>
      <BrowserRouter>
        <div>
          <NavigationBar loggedInUserData={res.data}/>
          <Switch>
            <Route exact path="/" render={(props) => <HomeContainer {...props} loggedInUserData={res.data} />} />
            <Route exact path="/download" component={QuillEditDocument} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    ,document.getElementById("app"))

});