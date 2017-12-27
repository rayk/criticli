const should = require('should');
const input = require('../../../resources/cliInputs/cli-input-project-new');
const action = require('../../../../lib/project/actions');

describe('Project New - Creating an FSA from CLI inputs.', () => {
  it('should create action for new project.', () => {
    const cliInput = input.project_add_noDefault_noForce_noLabel;
    const result = action.addProject(cliInput);
    result.type.should.eql(action.ACTION_TYPE_ADD_PROJECT);
    result.should.have.properties('type', 'payload', 'error', 'meta');
    result.error.should.be.false();
    result.meta.actionId.should.not.be.empty();
  });
});
