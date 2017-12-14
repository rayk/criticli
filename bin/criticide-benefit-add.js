#!/usr/bin/env node --harmony

const addBenefit = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

addBenefit
  .description(
    'Adds a new benefit to the current default or the specified project.'
  )
  .option(
    '-p, --project [project]',
    'specify a project which benefit will be added'
  )
  .parse(process.argv);
