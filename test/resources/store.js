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

module.exports = { state };
