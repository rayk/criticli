const addObserve = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

addObserve
  .description(
    'Records a new observation related to the currently default or specified project built software.'
  )
  .option(
    '-p, --project [project]',
    'specify a project which the observations relates to'
  )
  .parse(process.argv);
