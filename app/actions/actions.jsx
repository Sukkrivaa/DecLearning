const moment = require('moment');

export var setTimeExample = () => {
  return {
    type: "SET_TIME_EXAMPLE",
    time: moment().unix()
  }
}
