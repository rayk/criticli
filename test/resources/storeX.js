/**
 * Initial State of the Project Slice.
 * @type {{allProjects: {}, allLabels: Array, defaultProject: Array}}
 */
const projectSliceInitialEmptyState = {
  allProjects: {},
  allLabels: {},
  defaultProject: {}
};

/**
 * Project lice of state populated with one simple project.
 * @type {{allProjects: {CTR999ZZZ: {projectId: string, name: string, description: string, isDefault: boolean, label: boolean, created: Date, updated: Date}}, allLabels: {}, defaultProject: {}}}
 */
const projectSliceSinglePopulatedState = {
  allProjects: {
    CTR999ZZZ: {
      projectId: 'CTR999ZZZ',
      name: 'Control Place Holder Project',
      description: 'This entity is a place holder used in testing.',
      isDefault: false,
      label: false,
      created: new Date('Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'),
      updated: new Date('Tue Dec 19 2017 11:39:21 GMT+1100 (AEDT)')
    }
  },
  allLabels: {},
  defaultProject: {}
};

const state = {
  projects: {
    2837: {
      id: 2837,
      name: 'Sample Project One',
      description: 'Development time sample project number one.',
      isDefault: true,
      created: 2934893,
      labels: ['label1', 'label2', 'label3'],
      isActive: true
    },
    8362: {
      id: 8362,
      name: 'Sample Project Two',
      description: 'Development time sample project number two.',
      isDefault: false,
      created: 2934893,
      labels: ['label1', 'label2', 'label3'],
      isActive: true
    },
    9527: {
      id: 9527,
      name: 'Sample Project Three',
      description: 'Development time sample project number three.',
      isDefault: false,
      created: 2934893,
      labels: ['label2', 'label3'],
      isActive: false
    }
  },
  labels: {
    7384: {
      id: 7384,
      label: 'label one',
      description: 'This is just label one'
    },
    6252: {
      id: 6252,
      label: 'label two',
      description: 'This is just label two'
    },
    9384: {
      id: 9384,
      label: 'label three',
      description: 'This is just label three'
    },
    2322: {
      id: 2322,
      label: 'label four',
      description: 'This is just label four'
    }
  },
  benefits: {
    6752: {
      id: 6752,
      project: 2837,
      name: 'benefit name',
      description: 'Long form description of the benefit',
      created: 829347,
      undesirables: [],
      negation: []
    }
  }
};

module.exports = {
  state,
  projectSliceInitialEmptyState,
  projectSliceSinglePopulatedState
};
