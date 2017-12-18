/**
 * Startup Module
 */

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

module.exports = {
  maybeConfig
};
