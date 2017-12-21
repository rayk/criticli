const should = require('should');
const redux = require('redux');
const fake = require('../../../resources/store-initial');
const reducer = require('../../../../lib/project/reducers');
const action = require('../../../../lib/project/actions');
const cliInput = require('../../../resources/cli-input-project-new');

describe('Project Sate - Reducers:', () => {
  it('should add new project to the state', () => {
    let store = redux.createStore(reducer.project);
    console.log(store.getState());
  });
});
