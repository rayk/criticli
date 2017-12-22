const should = require('should');
const env = require('../../bin/env/config');
const api = require('../../lib/api');
const p = require('path');
const fs = require('fs-extra');

describe('Given a State Store does not exist:', () => {
  const TEST_SAFE_DIRECTORY = p.join(process.cwd(), '/temp3/storeTest');
  const TEST_PORTFOLIO_NAME = 'Non-existent State Store Test';

  before(async () => {
    await env.initConfig(TEST_PORTFOLIO_NAME, TEST_SAFE_DIRECTORY);
  });

  after(async () => {
    fs.remove(p.join(process.cwd(), '/temp3/'), err => {
      if (err) return console.error(err);
    });
  });

  it('should return a empty state store.', async () => {
    const configObject = await env.getConfig(TEST_SAFE_DIRECTORY);
    api.storeGet(configObject).then(store => {
      console.log(store.getState());
    });
  });
});

describe('Given a State Store exist:', () => {
  it('should return a state store populated by the previous state.', () => {});
});
