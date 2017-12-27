const R = require('ramda');
const acts = require('./actions');
const payloadSchema = require('./schema');

const noAction = (state, action) => {
  console.log('noAction');
  return state;
};

const editProjectReducer = (state, action) => {
  console.log('editProjectCalled');
};

const addProjectReducer = (state, action) => {
  console.log('addProjectCalled');
  const newProject = R.view(
    payloadSchema.lens.projectEntity,
    R.prop('payload', action)
  );
  return R.assoc(R.head(R.keys(newProject)), newProject, state);
};

const selectReducer = R.cond([
  [R.isNil, R.always(noAction)],
  [R.equals(acts.ACTION_TYPE_ADD_PROJECT), R.always(addProjectReducer)],
  [R.equals(acts.ACTION_TYPE_EDIT_PROJECT), R.always(editProjectReducer)],
  [R.T, R.identity]
]);

const initialState = { projects: {}, labels: {}, defaultProject: {} };

/**
 * Returns a new state based upon the passed in state and action.
 * @param state
 * @param action
 * @return {*} state
 */
const handler = (state = initialState, action) => {
  const reducer = selectReducer(action);
  return reducer(state, action);
};

module.exports = {
  handler
};
