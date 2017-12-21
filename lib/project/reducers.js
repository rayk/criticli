const actionType = require('./actions');

const emptyState = {
  default: {},
  labels: {},
  projects: {}
};

// noinspection FunctionWithMultipleReturnPointsJS
const project = (state = emptyState, action) => {
  switch (action.type) {
    case actionType.ADD_PROJECT:
      return Object.assign({}, state, { projects: action.payload });
    default:
      return state;
  }
};

module.exports = {
  project
};
