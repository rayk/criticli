const assert = require('assert-plus');
const should = require('should');
const state = require('../../../../bin/store/state');

describe('State Store:', () => {
  it('returns a state store object', () => {
    const result = state.store({ a: 'b' });
    assert(result.dispatch);
    assert(result.getState);
    assert(result.subscribe);
  });

  it('returns an initial state.', () => {
    const passedInState = {
      state: {
        defaultProject: '',
        projects: {}
      },
      config: {
        path: '/some/path/string',
        initDate: new Date(),
        portfolio: 'A portfolio name',
        version: '0.0.0'
      }
    };
    const store = state.store(passedInState);
    should.deepEqual(store.getState(), passedInState);
  });
});
