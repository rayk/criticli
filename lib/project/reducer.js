const actionType = require('./actions');

const emptyState = [];

// noinspection FunctionWithMultipleReturnPointsJS
const reducer = (state = emptyState, action) => {
  switch (action.type) {
    case actionType.ADD_PROJECT:
      return Object.assign({}, state, { projects: action.payload });
    default:
      return state;
  }
};

module.exports = {
  reducer
};
