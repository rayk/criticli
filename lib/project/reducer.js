const R = require('ramda');
const acts = require('./actions');
const payloadSchema = require('./schema');

const editProjectReducer = (state, action) => {};

const addProjectReducer = (state, action) => {
  const newProject = R.view(
    payloadSchema.lens.projectEntity,
    R.prop('payload', action)
  );
  return R.assoc(R.head(R.keys(newProject)), newProject, state);
};

const selectReducer = R.cond([
  [R.equals(acts.ACTION_TYPE_ADD_PROJECT), R.always(addProjectReducer)],
  [R.equals(acts.ACTION_TYPE_EDIT_PROJECT), R.always(editProjectReducer)],
  [R.T, R.identity]
]);

const initialState = { allProjects: {}, allLabels: {}, defaultProject: {} };

/**
 * Returns a new state based upon the passed in state and action.
 * @param state
 * @param action
 * @return {*} state
 */
const handle = (state = initialState, action) => {
  const reduceFunction = selectReducer(acts.ACTION_TYPE_ADD_PROJECT);
  return reduceFunction(state, action);
};

module.exports = {
  handle
};
