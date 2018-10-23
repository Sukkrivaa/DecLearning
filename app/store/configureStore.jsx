var redux = require("redux");
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

var {setTimeReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {time: ""}) => {
	var reducer = redux.combineReducers({
		time: setTimeReducer
	});

	var store = redux.createStore(reducer, initialState, redux.applyMiddleware(thunk));

	return store;
}
