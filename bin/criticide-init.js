const ask = require('inquirer');
const chalk = require('chalk');
const fs = require('fs-extra');
const R = require('ramda');
const S = require('string');
const io = require('../lib/fileIO/fileOp');
const state = require('../lib/store/initState');

console.log(chalk.green('\fYour about to initialising a new portfolio!\f'));
console.log(
  'A new directory will be created, located under: ' + __dirname + '\f'
);

const askUser = async payload => {
  return await ask
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What name do you want to give this portfolio',
        validate: value => {
          return R.isEmpty(value) ? 'A portfolio requires a name' : true;
        },
        filter: value => S(value).titleCase().s
      }
    ])
    .then(collected => {
      return collected;
    });
};

askUser({}).then(answer => {
  io.newSubDir(__dirname, answer.name).then(outcome => {
    const stateModel = state.initialState(outcome);
    io.newJsonFile(outcome, 'criticide-config', stateModel).then(file => {
      console.log('done: ' + file);
    });
  });
});
