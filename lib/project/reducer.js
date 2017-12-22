const R = require('ramda');
const actionType = require('./actions');
const schema = require('./schema');
const N = require('normalizr');

const emptyState = { allProjects: [], allLabels: [], defaultProject: [] };

const normalisePayload = action => N.normalize(action, schema.projectAction);

// noinspection FunctionWithMultipleReturnPointsJS
const reducer = (state = emptyState, action) => {
  switch (action.type) {
    case actionType.ADD_PROJECT:
      console.log(JSON.stringify(normalisePayload(action)));
      console.log(state);
      return state;
    default:
      return state;
  }
};

module.exports = {
  reducer
};
