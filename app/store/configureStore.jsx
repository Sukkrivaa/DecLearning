var redux = require("redux");
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

var {updateActiveSubtopicReducer, updateSubtopicListReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {activeSubtopic: "", subtopics:[]}) => {
	var reducer = redux.combineReducers({
		activeSubtopic: updateActiveSubtopicReducer,
		subtopics: updateSubtopicListReducer
	});

	var store = redux.createStore(reducer, initialState, redux.applyMiddleware(thunk));

	return store;
}
