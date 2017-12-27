const should = require('should');
const R = require('ramda');
const schema = require('../../../../lib/project/schema');
const cliIn = require('../../../resources/cliInputs/cli-input-project-new');
const pre = require('../../../../lib/project/input-processor');

describe('Schema for normalising input from add project:', () => {
  it('should normalise an input for new project without labels, that not default.', () => {
    const input = pre.process(cliIn.project_add_noDefault_noForce_noLabel);
    const result = schema.normaliseActionPayload(input);
    result.should.have.properties('entities', 'result');
    result.entities.project.should.not.be.empty();
    result.entities.should.not.have.properties('labels');
    result.entities.should.not.have.properties('defaultProjects');
    const projectEntity = R.view(schema.lens.projectEntity, result);
    projectEntity[input.projectId].should.not.be.empty();
    projectEntity[input.projectId].should.have.properties(
      'default',
      'label',
      'active',
      'projectId',
      'name',
      'created',
      'updated'
    );
  });
  it('should normalise an input for new project without labels, that is default.  ', () => {
    const input = pre.process(cliIn.project_add_default_noForce_noLabel);
    const result = schema.normaliseActionPayload(input);
    result.entities.project.should.not.be.empty();
    result.entities.should.not.have.properties('labels');
    result.entities.should.have.properties('project', 'defaultProjects');
    const defaultEntity = R.view(schema.lens.defaultProject, result);
    const defaultEntityMap = defaultEntity[Date.parse(input.updated)];
    defaultEntityMap.should.not.be.empty();
    defaultEntityMap.should.have.properties('projectId', 'name', 'defaultedOn');
  });

  it('should normalise an input for new project with labels, that is not default.', () => {
    const input = pre.process(cliIn.project_add_noDefault_noForce_label);
    const result = schema.normaliseActionPayload(input);
    const projectEntity = R.view(schema.lens.projectEntity, result);
    const labelEntity = R.view(schema.lens.labelsEntity, result);
    result.entities.project.should.not.be.empty();
    result.entities.should.have.properties('project', 'labels');
    result.entities.should.not.have.property('default');
    const projectMap = projectEntity[input.projectId];
    projectMap.should.not.be.empty();
    projectMap.labels.should.have.lengthOf(R.keys(labelEntity).length);
  });
  it('should normalise an input for new project with labels, that is default.', () => {
    const input = pre.process(cliIn.project_add_default_noForce_label);
    const result = schema.normaliseActionPayload(input);
    result.entities.should.have.properties(
      'defaultProjects',
      'project',
      'labels'
    );
  });
});
