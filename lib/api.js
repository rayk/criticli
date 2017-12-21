/**
 * Public access to the application state.
 * @module lib/api
 */
const projectActions = require('./project/actions');

const projectAdd = input => projectActions.addProject(input);

module.exports = {
  /**
   * Returns an Action from an map that creates a new project.
   * The resulting action is intended for dispatch to the state store.
   * @since 0.0.5
   * @param {object} input - Raw input describing the new  project.
   * @return {{type: string, payload: {object}}} action - For dispatch to store.
   *
   */
  projectAdd
};
