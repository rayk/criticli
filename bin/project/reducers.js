const actionType = require('./actions');

const projectPartState = {
  state: {
    defaultProject: '',
    projects: {}
  }
};

// noinspection FunctionWithMultipleReturnPointsJS
const reduceProject = (state = projectPartState, action) => {
  switch (action.type) {
    case actionType.ADD_PROJECT:
      return Object.assign({}, state, { projects: action.payload });
    default:
      return state;
  }
};

module.exports = {
  reduceProject
};
