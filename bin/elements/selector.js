const R = require("ramda");
const assert = require("assert");

const PROJECT_DEFAULT_KEY = "isDefault";
const PROJECT_DESCRIPTION_KEY = "description";
const PROJECT_IS_DEFAULT_KEY = "isDefault";
const PROJECT_NAME_KEY = "name";
const PROJECT_IS_ACTIVE_KEY = "isActive";
const STATE_PROJECTS_KEY = "projects";

const projectsObjectLens = R.lensProp(STATE_PROJECTS_KEY);

const defaultProjectPredicate = R.propEq(PROJECT_DEFAULT_KEY, true);

/**
 * Returns a list of all the projects.
 * @param store  State Store
 * @return Array<Object>
 */
const allProjects = store => {
  const resultList = R.values(R.view(projectsObjectLens, store.state));
  assert.notEqual(
    resultList.length,
    0,
    "There always must be one defined project"
  );
  return resultList;
};

/**
 * Returns a list with the current default project.
 * @param store
 * @return Array<Object> default project object.
 */
const currentProject = store => {
  const resultList = R.filter(
    defaultProjectPredicate,
    R.values(R.view(projectsObjectLens, store.state))
  );
  assert.equal(
    resultList.length,
    1,
    "One and Only One default project should exist."
  );
  return resultList;
};

const valueProjectDescription = p => R.prop(PROJECT_DESCRIPTION_KEY, p);
const valueProjectIsDefault = p => R.prop(PROJECT_IS_DEFAULT_KEY, p);
const valueProjectIsActive = p => R.prop(PROJECT_IS_ACTIVE_KEY, p);

/**
 * Returns a list of projects where name is equal to the passed in value.
 * @param value
 * @param sourceList
 * @return {*|R.Filter<any>|any[]|R.Dictionary<any>}
 */
const projectByName = (value, sourceList) =>
  R.filter(R.propEq(PROJECT_NAME_KEY, value), sourceList);

module.exports = {
  allProjects,
  currentProject,
  projectByName,
  valueProjectDescription,
  valueProjectIsActive,
  valueProjectIsDefault
};
