const should = require('should');
const pretty = require('prettyjson');
const fake = require('../../../resources/storeX');
const project = require('../../../../lib/project/reducer');
const action = require('../../../../lib/project/actions');
const cliInput = require('../../../resources/cliInputs/cli-input-project-new');

describe('Project State Reduce - Initial Call:', () => {
  it('should return the empty initial state.', () => {
    const result = project.handle();
    result.allProjects.should.be.Object();
    result.allProjects.should.be.empty();
    result.allLabels.should.be.Object();
    result.allLabels.should.be.empty();
    result.defaultProject.should.be.Object();
    result.defaultProject.should.be.empty();
  });
  it('should return whatever state is passed in.', () => {
    const randomState = { state: 'random test state', key: { k1: 'value' } };
    project.handle(randomState).should.deepEqual(randomState);
  });
});

describe('Project State Reducer - Adding Projects:', () => {
  const emptyState = project.handle();

  it('should add a new project without labels to an empty state', () => {
    const input = cliInput.project_add_noDefault_noForce_noLabel;
    const state = project.handle(emptyState, action.addProject(input));
    console.log(pretty.render(state));
  });

  it('should add a new project without labels to a populated state', () => {
    const initialPopulatedState = fake.projectSliceSinglePopulatedState;
    const input = cliInput.project_add_noDefault_noForce_noLabel;
    const result = project.handle(initialPopulatedState, input);
    console.log(result);
  });
});

describe('Project State Reducer - Editing Projects:', () => {});
describe('Project State Reducer - Deleting Projects:', () => {});
describe('Project State Reducer - Setting Default Project:', () => {});
