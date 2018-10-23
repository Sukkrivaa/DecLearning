export var setTimeReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_TIME_EXAMPLE":
      return action.time
      break;
    default:
      return state
  }
}
