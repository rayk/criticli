const redux = require('redux');
const projectReducers = require('../../lib/project/reducers');

let store = state => redux.createStore(projectReducers.project, state);

module.exports = {
  store
};
