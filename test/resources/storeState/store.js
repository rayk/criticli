/**
 * Empty project state.
 * @type {{defaultProject: {}, labels: {}, projects: {}}}
 */
const stateEmpty = {
  defaultProject: {},
  labels: {},
  projects: {}
};

/**
 * State after the first project was added.
 */
const stateFirstProject = {
  defaultProject: {
    1514372333: {
      id: '087445e7',
      name: 'First Test Project',
      defaultOn: '2017-12-27T10:58:53+11:00'
    }
  },
  labels: {},
  projects: {
    '087445e7': {
      active: true,
      created: '2017-12-27T10:58:53+11:00',
      default: true,
      id: '087445e7',
      name: 'First Test Project',
      updated: '2017-12-27T10:58:53+11:00'
    }
  }
};

module.exports = {
  stateEmpty,
  stateFirstProject
};
