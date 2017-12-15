const listProject = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

listProject
  .description('Displays a list of all projects which criticide is tracking.')
  .option('-a, --active', 'show only active projects')
  .option('-i, --inactive', 'show only inactive projects')
  .parse(process.argv);
