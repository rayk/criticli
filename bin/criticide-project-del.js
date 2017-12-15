const delProject = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

delProject
  .description(
    'Permanently deletes the current default project or specified project.'
  )
  .option(
    '-d, --default [project]',
    'specifies a project to become the default, otherwise the previous default is used'
  )
  .option(
    '-p, --project [project]',
    'specifies a project to delete, otherwise the current default is deleted'
  )
  .parse(process.argv);
