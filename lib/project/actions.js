const R = require('ramda');
const ADD_PROJECT = 'ADD_PROJECT';

const KEY_IS_DEFAULT = 'default';
const KEY_PROJECT_ID = 'projectId';
const KEY_PROJECT_NAME = 'name';
const KEY_PROJECT_UPDATE = 'updated';
const KEY_FORCE = 'force';

const addDefaultObject = input =>
  R.assoc(
    KEY_IS_DEFAULT,
    {
      projectId: R.prop(KEY_PROJECT_ID, input),
      name: R.prop(KEY_PROJECT_NAME, input),
      defaultedOn: Date.parse(R.prop(KEY_PROJECT_UPDATE, input))
    },
    input
  );

const makeDefault = R.cond([
  [R.prop(KEY_IS_DEFAULT), input => addDefaultObject(input)],
  [R.T, input => R.identity(input)]
]);

const dropForceKey = R.dissoc(KEY_FORCE);

const processInput = R.pipe(makeDefault, dropForceKey);

const addProject = input => {
  return {
    type: ADD_PROJECT,
    payload: processInput(input)
  };
};

module.exports = {
  ADD_PROJECT,
  addProject
};
