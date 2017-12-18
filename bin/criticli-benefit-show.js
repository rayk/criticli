const showBenefit = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

showBenefit
  .description('Show all the details of specified benefit')
  .parse(process.argv);
