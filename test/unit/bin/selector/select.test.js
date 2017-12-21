const select = require('../../../../bin/elements/selector');
const state = require('../../../resources/store.js');
const assert = require('assert-plus');

describe('Project Selector:', () => {
  it('should only one active project', () => {
    const result = select.currentProject(state);
    assert.equal(result.length, 1);
  });
});
