const redux = require('redux');
const serialise = require('serialize-javascript');
const fs = require('fs-extra');
const benefit = require('../benefit/reducer').reducer;
const project = require('../project/reducer').handler;

const emptyInitialState = {};
const reducers = redux.combineReducers({
  benefitSlice: benefit,
  projectSlice: project
});

const checkStoreFileExist = async config => {
  return await fs
    .stat(config.store)
    .then(stats => {
      return stats.isFile();
    })
    .catch(err => {
      return err.code === 'ENOENT' ? false : console.error('a' + err);
    });
};

const initialiseStoreFile = async config => {
  return await fs
    .writeJSON(config.store, serialise(emptyInitialState))
    .then(() => {
      return emptyInitialState;
    })
    .catch(err => {
      throw err;
    });
};

const inflateState = async config => {
  const storeFile = config.store;
  return await fs
    .readJSON(storeFile)
    .then(content => {
      return eval('(' + content + ')');
    })
    .catch(err => {
      return fs.writeJSONSync(config.store, {});
    })
    .catch(err => {
      console.log('err2');
    });
};

/**
 * Return a new or re-inflated initial state object.
 * @param config
 */
const getInitialState = async config => {
  return await checkStoreFileExist(config)
    .then(answer => {
      if (answer) {
        inflateState(config)
          .then(state => {
            return state;
          })
          .catch(err => {
            console.error('1' + err);
          });
      } else {
        initialiseStoreFile(config)
          .then(state => {
            return state;
          })
          .catch(err => {
            console.error('Fail to Create Redux Store' + err);
          });
      }
    })
    .catch(err => {
      throw err;
    });
};

/**
 * Returns the state store containing the application state.
 * @param config - Configuration to used to establish the store.
 * @return {Store<any>} - A Redux Store.
 */
exports.getStore = async config => {
  const initialState = await getInitialState(config);
  return redux.createStore(reducers, initialState);
};
