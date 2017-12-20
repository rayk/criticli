const norm = require('normalizr');
const R = require('ramda');

const KEY_LABEL_ENTITY = 'labels';
const KEY_LABEL_ID = 'labelId';
const KEY_PROJECT_ENTITY = 'project';
const KEY_PROJECT_ID = 'projectId';

const actionTypeElement = R.lensPath(['type']);
const entitiesElement = R.lensPath(['entities']);
const projectsElement = R.lensPath([KEY_PROJECT_ENTITY]);
const resultElement = R.lensPath(['result']);
const payloadElement = R.lensPath(['payload']);

/**
 * Collection of lens focused on the normalised object.
 */
const lensOn = {
  valueActionType: R.compose(resultElement, actionTypeElement),
  valuePayload: R.compose(resultElement, payloadElement),
  entityProject: R.compose(entitiesElement, projectsElement)
};

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

const projectEntity = new norm.schema.Entity(
  KEY_PROJECT_ENTITY,
  { label: label },
  { idAttribute: KEY_PROJECT_ID }
);

/**
 * Defines the normalisation schema for a Project Action payload.
 * @type {{payload: schema.Entity}}
 */
const projectAction = {
  payload: projectEntity
};

module.exports = {
  projectAction,
  lensOn
};
