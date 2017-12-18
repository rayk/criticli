const redux = require('redux');
const projectReducers = require('../project/reducers');

let store = state => redux.createStore(projectReducers.reduceProject, state);

module.exports = {
  store
};
