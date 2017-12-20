const R = require('ramda');
const should = require('should');
const input = require('../../resources/cli-input-project-new');
const action = require('../../../bin/project/actions');

const payloadLens = R.lensPath(['payload']);
const projectIdLens = R.lensPath(['projectId']);
const defaultLens = R.lensPath(['default']);
const labelListLens = R.lensPath(['labels']);
const forceValueLens = R.lensPath(['force']);

const proId = R.compose(payloadLens, projectIdLens);
const proDefault = R.compose(payloadLens, defaultLens);
const labels = R.compose(payloadLens, labelListLens);
const force = R.compose(payloadLens, forceValueLens);

describe('Forming actions from CLI new project inputs.', () => {
  it('should handle new non default project with no label.', () => {
    const cliInput = input.project_add_noDefault_noForce_noLabel;
    should.equal(cliInput.default, false, 'Input should be default = false');
    const act = action.addProject(cliInput);
    should.equal(act.type, action.ADD_PROJECT, 'Action type inconsistent.');
    should.equal(R.view(proId, act), cliInput.projectId, 'ProjectId mutated.');
    should.equal(R.view(proDefault, act), false, 'Should not be default.');
  });

  it('should handle new default project with no label.', () => {
    const cliInput = input.project_add_default_noForce_noLabel;
    const act = action.addProject(cliInput);
    const expected = {
      projectId: cliInput.projectId,
      name: cliInput.name
    };
    should.equal(act.type, action.ADD_PROJECT, 'Action type inconsistent.');
    should.equal(R.view(proId, act), cliInput.projectId, 'ProjectId mutated.');
    should.deepEqual(R.view(proDefault, act), expected, 'Default not added');
  });

  it('should handle new default project with labels.', () => {
    const cliInput = input.project_add_default_noForce_label;
    const inputLabels = cliInput.labels;
    const act = action.addProject(cliInput);
    const expected = {
      projectId: cliInput.projectId,
      name: cliInput.name
    };
    should.deepEqual(R.view(proDefault, act), expected, 'Default not added');
    should.equal(R.view(labels, act), inputLabels, 'Labels mutated.');
  });

  it('should drop the force flag key passed in the input.', () => {
    const cliInputOne = input.project_add_default_noForce_label;
    const cliInputTwo = input.project_add_noDefault_noForce_noLabel;
    const cliInputThree = input.project_add_noDefault_force_noLabel;
    const actOne = action.addProject(cliInputOne);
    const actTwo = action.addProject(cliInputTwo);
    const actThree = action.addProject(cliInputThree);
    should.equal(R.view(force, actOne), undefined, 'Force flag not removed');
    should.equal(R.view(force, actTwo), undefined, 'Force flag not removed');
    should.equal(R.view(force, actThree), undefined, 'Force flag not removed');
  });
});
