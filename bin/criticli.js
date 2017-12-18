#!/usr/bin/env node
'use strict';

const cli = require('commander');
const R = require('ramda');
const pkg = require('../package');
const chalk = require('chalk');

const env = require('./env/config');

console.log(
  chalk.yellow.bold('Criticide Command Line Interface - ' + pkg.version)
);

cli
  .version(pkg.version)
  .description(
    'Criticide CLI allows you to model and simulate software development projects.'
  );

cli
  .command(
    'init',
    'initialises a new criticide portfolio, that can contain many projects'
  )
  .alias('i');
cli.command('project [action]', 'create and manage projects').alias('p');
cli.command('benefit [action]', 'manage project benefits').alias('b');
cli
  .command('envelope [action]', 'work with a projects opportunity envelop')
  .alias('e');
cli
  .command('observe [action]', 'manage observations of the software')
  .alias('o');

cli.option('-s, --state', 'output the current state store contents');
cli.option('-p, --path', 'outputs the pat the current working directory');

env.getConfig().then(result => {
  cli.parse(process.argv);
  const defaultProject =
    result.config.portfolio && result.state.defaultProject
      ? `Default project set to: ${result.state.defaultProject}`
      : "Run 'criticli init', then create a project using 'criticli project add'.";
  const headLine = result.config.portfolio
    ? chalk.green(`${result.config.portfolio} Portfolio.`)
    : chalk.red('This directory as not been initialised.');
  const projectLine =
    result.config.portfolio && R.empty(result.state.defaultProject)
      ? chalk.yellow('No projects defined for this portfolio.')
      : chalk.green(`${defaultProject}`);
  console.log(`\f  ${headLine}`);
  console.log(`\f  ${projectLine}`);
});
