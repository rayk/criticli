/**
 * Configuration Module
 */
const fs = require('fs-extra');
const io = require('./io-ops');
const p = require('path');
const pkg = require('../../package.json');
const CONFIG_FILE_NAME = 'criticide-config';
const STORE_FILE_NAME = 'criticide-store';

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
    path: p.join(homePath, CONFIG_FILE_NAME + '.json'),
    portfolio: name,
    store: p.join(homePath, STORE_FILE_NAME + '.json'),
    version: version
  };
};

/**
 * Returns a state object which may or may not be initialised.
 */
const getConfig = async (path = process.cwd()) => {
  const configFilePath = p.join(path, CONFIG_FILE_NAME + '.json');
  return await fs
    .readJSON(configFilePath)
    .then(output => {
      return eval('(' + output + ')');
    })
    .catch(err => {
      return baseConfiguration(undefined, configFilePath, pkg.version);
    });
};

/**
 * Orchestrates the initialisation of a portfolio, returning it's base state.
 * @param {string } portfolioName
 * @param {string} path
 * @return {Promise<void>} full path of where the configuration was written
 */
const initConfig = async (portfolioName, path = process.cwd()) => {
  const content = baseConfiguration(portfolioName, path, pkg.version);
  const emptyDirectory = await io.createSubDirectory(path);
  return await io
    .createJSONFile(emptyDirectory, CONFIG_FILE_NAME, content)
    .then(fullPath => {
      return fullPath;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getConfig,
  initConfig
};
