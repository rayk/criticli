#!/usr/bin/env node --harmony

const project = require('commander');
const chalk = require('chalk');

project.description(
  'Manage the observations of the built software the current default or the specified project.'
);

project
  .command('add', 'new observation')
  .command('list', 'list all observations')
  .command('del [obId..]', 'permanently remove specified observations');

project.parse(process.argv);
