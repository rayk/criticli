const should = require('should');
const redux = require('redux');
const fake = require('../../resources/store-initial');
const reducer = require('../../../bin/project/reducers');
const action = require('../../../bin/project/actions');
const cliInput = require('../../resources/cli-input-project-new');

describe('Project reductions:', () => {
  it('should add new project to the state', () => {
    let store = redux.createStore(reducer.reduceProject, fake.state);
    const addProjectAction = action.addProject(
      cliInput.project_add_noDefault_noForce_noLabel
    );
    store.dispatch(addProjectAction);
    const result = store.getState();
    console.log(result);
  });
});
