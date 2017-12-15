const projectAction = require('../actions/project');

const initialState = {
  projects: []
};

// noinspection FunctionWithMultipleReturnPointsJS
const reduceProject = (action, state = initialState) => {
  switch (action.type) {
    case projectAction.ADD_PROJECT:
      return Object.assign({}, state, { projects: action.payload });
    default:
      return state;
  }
};

module.exports = {
  reduceProject
};
