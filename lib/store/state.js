/**
 * State Store.
 * @module state.
 */

const redux = require('redux');
const projectReducer = require('./project/reducer');

const reducerSet = {
  project: projectReducer
};

/**
 * Returns the state store containing the application state.
 * @param config - Configuration to used to establish the store.
 * @return {Store<any>} - A Redux Store.
 */
exports.getStore = config => {
  const inflatedState = {};

  return redux.createStore(reducerSet, inflatedState);
};
