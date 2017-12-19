/**
 * Configuration Module
 */
const fs = require('fs-extra');
const io = require('./io-ops');
const p = require('path');
const pkg = require('../../package.json');
const CONFIG_FILE_NAME = 'criticide-config';

/**
 * Initial State Object
 * @param name
 * @param homePath
 * @param version
 * @return {{state: {defaultProject: string, projects: {}}, config: {path: *, initDate: Date, portfolio: *, version: *}}}
 */
const baseConfiguration = (name, homePath, version) => {
  return {
    state: {
      defaultProject: '',
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
 * Returns a state object which may or may not be initialised.
 * @return {Promise<{{state: {defaultProject: string, projects: {}}, config: {path: string, initDate: Date, portfolio: string, version: string}}}>}
 */
const getConfig = async () => {
  const configFilePath = p.join(process.cwd(), CONFIG_FILE_NAME + '.json');
  return await fs
    .readJSON(configFilePath)
    .then(output => {
      return output;
    })
    .catch(err => {
      return baseConfiguration(undefined, process.cwd(), pkg.version);
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
  await io
    .createJSONFile(emptyDirectory, CONFIG_FILE_NAME, state)
    .then(fullPath => {
      return fullPath;
    });
};

module.exports = {
  getConfig,
  initConfig
};
