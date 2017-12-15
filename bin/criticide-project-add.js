const addProject = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');
const sid = require('shortid');

const input = require('./elements/readInput');
const action = require('../lib/actions/project');

const askUser = async payload => {
  return await ask
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What name would you like to give this project',
        validate: value => {
          return R.isEmpty(value) ? 'A project requires a name' : true;
        },
        filter: value => S(value).titleCase().s,
        when: R.not(payload.args)
      },
      {
        type: 'input',
        name: 'label',
        message: 'Label to attach this project',
        default: payload.label,
        when: R.and(payload.label, R.not(payload.args))
      },
      {
        type: 'confirm',
        name: 'force',
        message: 'Overwrite exist project with the same name',
        default: payload.force,
        when: R.and(payload.force, R.not(payload.args))
      },
      {
        type: 'confirm',
        name: 'default',
        message: 'Set this new project as the default project',
        default: payload.default,
        when: R.and(payload.default, R.not(payload.args))
      }
    ])
    .then(collected => {
      return R.merge(payload, collected);
    });
};

addProject
  .description('Creates a new project for modeling and simulation.')
  .option(
    '-d, --default',
    'set the newly created project as the default project'
  )
  .option(
    '-f, --force',
    'overwrites any existing project that has the same name, all associated project data is removed'
  )
  .option('-l, --label <name>', 'assign label to new project')
  .parse(process.argv);

askUser(input.mapFromCli(addProject)).then(answer => {
  console.log(
    'Payload for API => ' + JSON.stringify(action.addProject(answer))
  );
});
