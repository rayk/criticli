#!/usr/bin/env node --harmony

const listBenefit = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

listBenefit
  .description(
    'List all the benefits in the current default project or the specified project.'
  )
  .option(
    '-p, --project [project]',
    'specify a project for which to list all benefits'
  )
  .parse(process.argv);
