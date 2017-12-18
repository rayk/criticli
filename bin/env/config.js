/**
 * Configuration Module
 */
const io = require('./io-ops');
const p = require('path');
const CONFIG_FILE_NAME = 'criticide-config';

const baseConfiguration = (name, homePath, version) => {
  return {
    state: {
      projects: {}
    },
    config: {
      path: homePath,
      initDate: new Date(),
      portfolio: name,
      version: version
    }
  };
};

/**
 * Returns a configuration located in the path.
 * @param {string} path
 */
const getConfig = async path => {
  const pathProperties = p.parse(path);
  const configFile = CONFIG_FILE_NAME + '.json';
  return await io
    .readJSONFile(p.join(pathProperties.root, pathProperties.dir, configFile))
    .then(config => {
      return config;
    });
};

/**
 * Orchestrates the initialisation of a portfolio, returning it's base state.
 * @param {string } portfolioName
 * @param {string} path
 * @param {string} version number of the cli
 * @return {Promise<void>} full path of where the configuration was written
 */
const initConfig = async (portfolioName, path, version) => {
  const state = baseConfiguration(portfolioName, path, version);
  const emptyDirectory = await io.createSubDirectory(path);
  return await io
    .createJSONFile(emptyDirectory, CONFIG_FILE_NAME, state)
    .then(fullPath => {
      return fullPath;
    });
};

module.exports = {
  getConfig,
  initConfig
};
