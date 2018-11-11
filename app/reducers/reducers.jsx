const actionStrings = require("./../../config/magicStrings").actionStrings;

export var updateActiveSubtopicReducer = (state = "General Introduction", action) => {
  //The initial state should be "general in the future once we add that in"
  switch (action.type) {
    case actionStrings.activeStateActions.CHANGE_ACTIVE_SUBTOPIC:
      return action.activeSubtopic;
      break;
    default:
      return state;
  }
}

export var updateSubtopicListReducer = (state = [],action) => {
  switch (action.type){
    case actionStrings.SubtopicListActions.SET_INITIAL_STATE:
  		action.subtopicArray.sort((a,b) => {
  			return a.order - b.order;
  		})
			return action.subtopicArray;
      break;
    default:
      return state;
  }


}
