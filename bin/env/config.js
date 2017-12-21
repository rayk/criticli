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
 * @return {{initDate: Date, path: string, portfolio: string, store: string, version: string}}
 */
const baseConfiguration = (name, homePath, version) => {
  return {
    initDate: new Date(),
    path: homePath,
    portfolio: name,
    store: '',
    version: version
  };
};

/**
 * Returns a state object which may or may not be initialised.
 * @return {Promise<{{state: {defaultProject: string, projects: {}}, config: {path: string, initDate: Date, portfolio: string, version: string}}}>}
 */
const getConfig = async (path = process.cwd()) => {
  const configFilePath = p.join(path, CONFIG_FILE_NAME + '.json');
  return await fs
    .readJSON(configFilePath)
    .then(output => {
      return output;
    })
    .catch(err => {
      return baseConfiguration(undefined, configFilePath, pkg.version);
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
