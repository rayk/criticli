const should = require('should');
const norm = require('normalizr');
const fake = require('../../resources/store-initial');

const state = require('../../../bin/store/schema');

describe('State Normalization:', () => {
  it('should normalize.', () => {
    const result = norm.normalize(fake.state, state.schema);
    console.log(result);
  });
});
