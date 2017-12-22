const fs = require('fs-extra');
const S = require('string');
const path = require('path');
const serialise = require('serialize-javascript');

/**
 * Returns the full path to the newly created JSON file.
 * @param directory
 * @param name
 * @param content
 * @return {Promise<void>}
 */
const createJSONFile = async (directory, name, content) => {
  const target = path.join(directory, S(name).slugify().s + '.json');
  const serialised = serialise(content);
  return await fs
    .writeJSON(target, serialised)
    .then(() => {
      return target;
    })
    .catch(err => {
      return err;
    });
};

/**
 * Return the full path of the newly created sub directory.
 * @param target
 * @return {Promise<void>}
 */
const createSubDirectory = async target => {
  return await fs
    .emptyDir(target)
    .then(() => {
      return target;
    })
    .catch(err => {
      return err;
    });
};

/**
 * Returns the contains of JSON file.
 * @param fullPath
 * @return {Promise<any>}
 */
const readJSONFile = async fullPath => {
  return await fs
    .readJSON(fullPath)
    .then(content => {
      return eval('(' + content + ')');
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  createJSONFile,
  createSubDirectory,
  readJSONFile
};
