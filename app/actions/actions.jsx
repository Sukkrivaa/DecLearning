const moment = require('moment');
const actionStrings = require("./../../config/magicStrings").actionStrings;

export var changeActiveSubtopic = (activeSubtopic) => {
  return {
    type: actionStrings.activeStateActions.CHANGE_ACTIVE_SUBTOPIC,
    activeSubtopic
  }
}

export var setInitialSubtopicsState = (subtopicArray) => {
  return {
		type: actionStrings.SubtopicListActions.SET_INITIAL_STATE,
		subtopicArray
	};
}
