const assert = require('assert-plus');
const env = require('../../../bin/store/startup');

describe('Returns a state object for the portfolio if it exist', () => {
  it('Return an initialised state object', async () => {
    const result = await env.maybeConfig('0.0.0');
  });
  it('Returns Nothing Type if not initialised.', async () => {
    const result = await env.maybeConfig('0.0.0');
    assert.equal(result.code, 'ENOENT');
  });
});
