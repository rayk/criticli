const listEnvelope = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

listEnvelope
  .description(
    'all the envelopes associated with specified project, default project used if not specified.'
  )
  .option(
    '-p, --project [name]',
    'specify the project for which to list opportunity envelopes.'
  )
  .option('-a, --active', 'only show envelop')
  .option('-i, --inactive', 'only show inactive envelops')
  .parse(process.argv);
