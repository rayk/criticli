#!/usr/bin/env node --harmony

const editEnvelope = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

editEnvelope
  .description('properties that define the envelopes calculation parameters.')
  .option(
    '-n, --name [newName]',
    'changes the envelope name to the passed in value.'
  )
  .option(
    '-d, --description [description]',
    'change the description associated with the envelope.'
  )
  .option(
    '-b, --base [date]',
    'change the base start date of the envelope, can be after or before the project started.'
  )
  .option(
    '-t, --top [value]',
    'change the starting value of the top boundary line.'
  )
  .option(
    '-y, --decay [rate]',
    'change the starting decay rate of the top boundary line.'
  )
  .option(
    '-p,--priori [rate]',
    'change the initial priori probability of benefit failure'
  )
  .option(
    '-a, --active',
    'changes the envelope to an active status, calculations are automatically executed when new data is provided.'
  )
  .option(
    '-i, --inactive',
    'changes the envelope to inactive, pausing automatic calculations.'
  )
  .parse(process.argv);
