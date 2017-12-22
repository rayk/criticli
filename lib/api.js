/**
 * Criticide Model API exposed CLI commands.
 * @module api
 */
const projectActions = require('./project/actions');
const store = require('./store/state');

module.exports = {
  /**
   * Returns an Action to create new project from an map of new project particulars.
   * The resulting action is intended for dispatch to the state store.
   * @since 0.0.5
   * @public
   * @param {object} input - Raw input describing the new  project.
   * @return {{type: string, payload: {object}}} action - For dispatch to store.
   *
   */
  projectAdd: input => projectActions.addProject(input),

  /**
   * Returns a Redux State Store.
   * The resulting action is intended for dispatch to the state store.
   * @since 0.0.5
   * @public
   * @param {object} config - Configuration Object for the environment.
   * @return {Store<any>} action - Redux Store.
   *
   */
  storeGet: config => store.getStore(config)
};
