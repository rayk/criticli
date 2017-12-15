const delObserve = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

delObserve
  .description('observations that match the specified id numbers.')
  .parse(process.argv);
