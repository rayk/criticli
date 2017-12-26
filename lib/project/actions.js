const shortId = require('shortid');
const preProcess = require('./input-processor');
const schema = require('./schema');
const ACTION_TYPE_ADD_PROJECT = 'ADD_PROJECT';
const ACTION_TYPE_EDIT_PROJECT = 'EDIT_PROJECT';

/**
 * Builds a FSA with a fully normalised payload from the inputs.
 * @param {Object} input - Map object of input values.
 * @return {{type: string, payload, error: boolean, meta: {}}}
 */
const addProject = input => {
  return {
    type: ACTION_TYPE_ADD_PROJECT,
    payload: schema.normaliseActionPayload(preProcess.process(input)),
    error: false,
    meta: {
      actionId: shortId.generate(),
      errorList: []
    }
  };
};

module.exports = {
  ACTION_TYPE_ADD_PROJECT,
  ACTION_TYPE_EDIT_PROJECT,
  addProject
};
