const norm = require('normalizr');
const R = require('ramda');
const schema = require('normalizr').schema;

const KEY_DEFAULT_TIME = 'defaultedOn';
const KEY_LABEL_ID = 'labelId';

const KEY_DEFAULT_PROJECTS_ENTITY = 'defaultProjects';
const KEY_ENTITIES = 'entities';
const KEY_LABEL_ENTITY = 'labels';
const KEY_PROJECT_ENTITY = 'project';

const labelProcessingStrategy = (value, parent, key) => {
  return { ...value, projects: [parent.projectId] };
};

const labelMergeStrategy = (entityA, entityB) => {
  return {
    ...entityA,
    ...entityB,
    projects: [...(entityA.projects || []), ...(entityB.projects || [])]
  };
};

const label = new norm.schema.Entity(
  KEY_LABEL_ENTITY,
  {},
  {
    idAttribute: KEY_LABEL_ID,
    processStrategy: labelProcessingStrategy,
    mergeStrategy: labelMergeStrategy
  }
);

const labelList = new norm.schema.Array(label);

const defaultProject = new norm.schema.Entity(
  KEY_DEFAULT_PROJECTS_ENTITY,
  {},
  { idAttribute: KEY_DEFAULT_TIME }
);

const actionInputSchema = new schema.Entity(
  KEY_PROJECT_ENTITY,
  {
    labels: labelList,
    defaultProject: defaultProject
  },
  { idAttribute: 'projectId' }
);

/**
 * Returns a normalised version of the inputs.
 * @param {object} input - de-normalised input map.
 * @return {{entities:{object}, result:{object}}}
 */
const normaliseActionPayload = input => {
  return norm.normalize(input, actionInputSchema);
};

const lens = {
  projectEntity: R.lensPath([KEY_ENTITIES, KEY_PROJECT_ENTITY]),
  defaultProject: R.lensPath([KEY_ENTITIES, KEY_DEFAULT_PROJECTS_ENTITY]),
  labelsEntity: R.lensPath([KEY_ENTITIES, KEY_LABEL_ENTITY])
};

module.exports = {
  lens,
  normaliseActionPayload
};
