const should = require('should');
const pre = require('../../../../lib/project/input-processor');
const cliInput = require('../../../resources/cli-input-project-new');

describe('PreProcess New Project Inputs:', () => {
  it('should drop the cli overwrite force key', () => {
    pre
      .process(cliInput.project_add_default_noForce_noLabel)
      .should.not.have.property('force');
    pre
      .process(cliInput.project_add_default_noForce_label)
      .should.not.have.property('force');
    pre
      .process(cliInput.project_add_noDefault_noForce_noLabel)
      .should.not.have.property('force');
    pre
      .process(cliInput.project_add_default_noForce_noLabel)
      .should.not.have.property('force');
  });

  it('should add a default project entity when default is true.', () => {
    const input = cliInput.project_add_default_noForce_noLabel;
    const result = pre.process(input);
    result.defaultProject.should.not.be.empty();
    result.defaultProject.projectId.should.eql(input.projectId);
    result.defaultProject.name.should.eql(input.name);
    result.defaultProject.defaultedOn.should.eql(Date.parse(input.created));
  });

  it('should not add a default project entity when default is false', () => {
    const input = cliInput.project_add_noDefault_noForce_noLabel;
    const result = pre.process(input);
    result.should.not.have.property('defaultProject');
  });
});
