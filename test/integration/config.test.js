const should = require('should');
const p = require('path');
const fs = require('fs-extra');
const pkg = require('../../package');

const env = require('../../bin/env/config');

describe('Given a configuration does not exist:', () => {
  process.env.NODE_ENV = 'development';
  const TEST_SAFE_DIRECTORY_ONE = p.join(process.cwd(), '/temp1/configTest');
  const NEW_PORTFOLIO_NAME_ONE = 'Integration Test Portfolio 1';

  after(() => {
    fs.remove(p.join(process.cwd(), '/temp1/'), err => {
      if (err) return console.error(err);
    });
  });

  it('should return an empty configuration object.', async () => {
    const config = await env.getConfig();
    config.should.not.empty();
    config.should.have.keys(
      'initDate',
      'path',
      'portfolio',
      'store',
      'version'
    );
    config.should.have.property('portfolio').eql(undefined);
    config.should.have.property('path').containEql(process.cwd());
  });

  it('should initialise a new configuration.', async () => {
    TEST_SAFE_DIRECTORY_ONE.should.not.eql(process.cwd());
    const noConfigExist = await env.getConfig(TEST_SAFE_DIRECTORY_ONE);
    noConfigExist.should.have.property('portfolio').eql(undefined);
    noConfigExist.should.have
      .property('path')
      .containEql(TEST_SAFE_DIRECTORY_ONE);

    env
      .initConfig(NEW_PORTFOLIO_NAME_ONE, TEST_SAFE_DIRECTORY_ONE)
      .then(path => {
        path.should.containEql(TEST_SAFE_DIRECTORY_ONE);

        env
          .getConfig(TEST_SAFE_DIRECTORY_ONE)
          .then(configContent => {
            configContent.initDate.should.be.Date();
            configContent.path.should.containEql(TEST_SAFE_DIRECTORY_ONE);
            configContent.portfolio.should.eql(NEW_PORTFOLIO_NAME_ONE);
            configContent.store.should.containEql(TEST_SAFE_DIRECTORY_ONE);
            configContent.version.should.eql(pkg.version);
          })
          .catch(err => {
            throw err;
          });
      });
  });
});

describe('Given a configuration does exist:', () => {
  const TEST_SAFE_DIRECTORY_TWO = p.join(process.cwd(), '/temp2/configTest');
  const TEST_PORTFOLIO_NAME_TWO = 'Existing Configuration Test Name';

  before(async () => {
    await env.initConfig(TEST_PORTFOLIO_NAME_TWO, TEST_SAFE_DIRECTORY_TWO);
  });

  after(() => {
    fs.remove(p.join(process.cwd(), '/temp2/'), err => {
      if (err) return console.error(err);
    });
  });

  it('should return the configuration object.', () => {
    env.getConfig(TEST_SAFE_DIRECTORY_TWO).then(configContent => {
      configContent.should.not.be.empty();
      configContent.initDate.should.be.Date();
    });
  });
});
