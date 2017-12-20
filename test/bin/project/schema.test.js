const should = require('should');
const schema = require('../../../bin/project/schema');
const input = require('../../resources/cli-input-project-new');
const action = require('../../../bin/project/actions');
const normalize = require('normalizr').normalize;
const pretty = require('prettyjson');
const R = require('ramda');

describe('Normalizations of project action payloads:', () => {
  it('should normalise adding a project with no labels.', () => {
    const cliInput = input.project_add_noDefault_noForce_noLabel;
    const payload = action.addProject(cliInput);
    const result = normalize(payload, schema.projectAction);
    const actionType = R.view(schema.lensOn.valueActionType, result);
    const resultProjectId = R.view(schema.lensOn.valuePayload, result);
    const normProject = R.view(schema.lensOn.entityProject, result);
    should.equal(actionType, action.ADD_PROJECT, 'Mismatched Action.');
    should.equal(resultProjectId, payload.payload.projectId);
    should.deepEqual(normProject[resultProjectId], payload.payload);
  });

  it('should normalise adding a new default project.', () => {
    const cliInput = input.project_add_default_noForce_noLabel;
    const payload = action.addProject(cliInput);
    const result = normalize(payload, schema.projectAction);
    console.log(pretty.render(result));
  });

  it('should normalise adding a project with labels.', () => {});


});
