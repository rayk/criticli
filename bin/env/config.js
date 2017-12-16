const io = require('./io-ops');
const p = require('path');
const CONFIG_FILE_NAME = 'criticide-config';

const baseConfiguration = (name, homePath) => {
  return {
    state: {
      projects: {}
    },
    config: {
      path: homePath,
      initDate: new Date(),
      portfolio: name
    }
  };
};

/**
 * Returns a configuration located in the path.
 * @param path
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
 * @param portfolioName
 * @param path
 * @return {Promise<void>}
 */
const initConfig = async (portfolioName, path) => {
  const state = baseConfiguration(portfolioName, path);
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
