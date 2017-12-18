const openEnvelope = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

openEnvelope
  .description(
    'new opportunity envelope for the specified project, default project is used if not specified.'
  )
  .option(
    '-p, --project [name]',
    'project which new envelope will be associated with.'
  )
  .option('-n, --name [newName]', 'name of the new envelope.')
  .option('-d, --description [description]', 'description of the new envelope.')
  .option('-b, --base [date]', 'base start date of the new envelope.')
  .option('-t, --top [value]', 'starting value of the top boundary line.')
  .option('-y, --decay [rate]', 'starting decay rate of the top boundary line.')
  .option('-p, --priori [rate]', 'priori probability of benefit failure.')
  .parse(process.argv);
