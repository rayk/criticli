const showProject = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

showProject
  .description(
    'Shows the properties of the specified project, when unspecified default project used.'
  )
  .option(
    '-p --project [project]',
    'specify the project to show properties for'
  )
  .option('-d, --details', 'show only the general project details')
  .option('-b, --benefits', 'show only the benefits defined for the project')
  .option(
    '-o, --observe',
    'show only the observation collected for the project'
  )
  .option('-s, --summary', 'show only the summary the project status')
  .parse(process.argv);
