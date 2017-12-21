const should = require('should');

const env = require('../../bin/env/config');

describe('Given a configuration does not exist.', () => {
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
    console.log(config);
  });
  it('should create initialise a new configuration.', () => {

  });
});

describe('Given a configuration does exist.', () => {});
