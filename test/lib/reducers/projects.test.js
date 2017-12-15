const action = require('../../../lib/actions/project');
const reducers = require('../../../lib/reducers/projects');
const assert = require('assert-plus');

describe('Reducers project actions.', () => {
  it('should add a new project to the state', () => {
    const result = reducers.reduceProject(
      action.addProject({
        default: true,
        force: false,
        label: false,
        name: 'Water Well'
      })
    );
  });
});
