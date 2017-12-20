const project_add_noDefault_noForce_noLabel = {
  default: false,
  force: false,
  label: false,
  active: true,
  projectId: 'SJ7Lk2rMz',
  name: 'Test Stub Project 1',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
};

const project_add_default_noForce_noLabel = {
  default: true,
  force: false,
  label: false,
  active: true,
  projectId: 'KNW93JT8U',
  name: 'Test Stub Project 2',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
};

const project_add_default_noForce_label = {
  default: true,
  force: false,
  labels: [
    {
      labelId: 'IS7NSU22P',
      label: 'Small Project',
      description: 'Used to denote a project is small.',
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      active: true
    },
    {
      labelId: 'UEJ9HEU28',
      label: 'Integration',
      description:
        'Denotes the project requires integration to existing systems.',
      created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
      active: true
    }
  ],
  active: true,
  projectId: 'KNW93JT8U',
  name: 'Test Stub Project 3',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
};

const project_add_noDefault_force_noLabel = {
  default: false,
  force: true,
  label: false,
  active: false,
  projectId: 'ZKY2H6837H',
  name: 'Test Stub Project 4',
  created: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)',
  updated: 'Tue Dec 19 2017 11:22:04 GMT+1100 (AEDT)'
};

module.exports = {
  project_add_noDefault_noForce_noLabel,
  project_add_default_noForce_noLabel,
  project_add_default_noForce_label,
  project_add_noDefault_force_noLabel
};
