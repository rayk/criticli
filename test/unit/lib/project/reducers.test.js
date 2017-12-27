const should = require('should');
const pretty = require('prettyjson');
const project = require('../../../../lib/project/reducer');
const action = require('../../../../lib/project/actions');
const cliInput = require('../../../resources/cliInputs/cli-input-project-new');

describe('Project State Reduce - Initial Call:', () => {
  it('should return the empty initial state.', () => {
    const result = project.handler();
    result.projects.should.be.Object();
    result.projects.should.be.empty();
    result.labels.should.be.Object();
    result.labels.should.be.empty();
    result.defaultProject.should.be.Object();
    result.defaultProject.should.be.empty();
    console.log(result);
  });
});

describe('Project State Reducer - Adding Projects:', () => {});

describe('Project State Reducer - Editing Projects:', () => {});
describe('Project State Reducer - Deleting Projects:', () => {});
describe('Project State Reducer - Setting Default Project:', () => {});
