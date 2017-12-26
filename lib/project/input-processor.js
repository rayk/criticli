const R = require('ramda');

/**
 * Add a default entity when project marked as default true.
 * @type {R.Arity1Fn | *}
 */
const defaultProject = R.when(R.prop('default'), input =>
  R.assoc('defaultProject', {
    projectId: R.prop('projectId', input),
    name: R.prop('name', input),
    defaultedOn: Date.parse(R.prop('updated', input))
  })(input)
);

/**
 * Drop the force key used by the cli to allow overwrites.
 * @type {any | <U>(obj: any) => U}
 */
const dropForceKey = R.dissoc('force');

/**
 * Processes the raw inputs to the add project action.
 */
module.exports.process = R.pipe(defaultProject, dropForceKey);
