/**
 * Startup Module
 */
const S = require('sanctuary');

const env = require('../env/config');
const pkg = require('../../package');

/**
 * Returns the state object found in the current work path.
 *
 * Startup functions have and transforms between version.
 * @param version
 */
const maybeConfig = async version => {
  return await env
    .getConfig(process.cwd())
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
};

const isStoreInitialised = async () => {
  return await maybeConfig(pkg.version).then(result => {
    return !!result.error;
  });
};

module.exports = {
  maybeConfig,
  isStoreInitialised
};
