const fs = require('fs-extra');
const S = require('string');

/**
 *  Return the full path of the newly created sub directory.
 * @param target
 * @param name
 * @return {Promise<void>}
 */
const newSubDir = async (target, name) => {
  const path = target + '/' + S(name).slugify().s;
  return await fs
    .emptyDir(path)
    .then(() => {
      return path;
    })
    .catch(err => {
      return err;
    });
};

const newJsonFile = async (dir, name, content) => {
  const path = dir + '/' + S(name).slugify().s + '.json';
  return await fs
    .writeJSON(path, content)
    .then(() => {
      return path;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  newSubDir,
  newJsonFile
};
