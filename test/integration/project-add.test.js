const api = require('../../lib/api');
const should = require('should');
const shortId = require('shortid');
const env = require('../../bin/env/config');
const p = require('path');
const fs = require('fs-extra');
const cliInput = require('../resources/cliInputs/cli-input-project-new');

describe('Given there are no projects.', () => {
  let configObject;
  const TEST_DIR_ID = shortId.generate();
  const TEST_SAFE_DIRECTORY = p.join(process.cwd(), TEST_DIR_ID, '/storeTest');
  const TEST_PORTFOLIO_NAME = 'Project Add Integration Test';

  before(async () => {
    await env.initConfig(TEST_PORTFOLIO_NAME, TEST_SAFE_DIRECTORY);
    configObject = await env.getConfig(TEST_SAFE_DIRECTORY);
  });

  after(async () => {
    fs.remove(p.join(process.cwd(), TEST_DIR_ID), err => {
      if (err) return console.error(err);
    });
  });

  it('should create a simple non-default project with no labels.', async () => {
    let store = await api.storeGet(configObject);
    store.dispatch(
      api.projectAdd(cliInput.project_add_noDefault_noForce_noLabel)
    );
    console.log(store.getState());
  });
});
describe('Given there are existing projects and a new project is created.', () => {});
describe('Given there are existing projects and a new default project is created.', () => {});
