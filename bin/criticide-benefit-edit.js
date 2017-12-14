#!/usr/bin/env node --harmony

const editBenefit = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

editBenefit
  .description(
    'Edits the specified benefit in the current default project unless an ID is specified'
  )
  .option(
    '-i, --id [benefitID]',
    'specific benefit, could be located in any project'
  )
  .parse(process.argv);
