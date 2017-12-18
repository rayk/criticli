const ask = require('inquirer');
const chalk = require('chalk');
const config = require('./env/config');
const pkg = require('../package');
const R = require('ramda');
const S = require('string');
const os = require('os');
const ora = require('ora');

console.log(chalk.green('\fYour about to initialising a new portfolio!\f'));

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
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where should your portfolio be saved',
        default: value => {
          return os.homedir() + '/portfolio/' + S(value.name).slugify().s;
        }
      },
      {
        type: 'confirm',
        name: 'overwrite',
        message: value => {
          return chalk.red('Warning overwriting all files in: ') + value.path;
        }
      }
    ])
    .then(collected => {
      return R.merge(payload, collected);
    });
};

askUser({ version: pkg.version }).then(answer => {
  if (answer.overwrite) {
    const spinner = ora().start('Starting Portfolio initialisation!');
    config
      .initConfig(answer.name, answer.path, answer.version)
      .then(configPath => {
        config.getConfig(configPath).then(result => {
          spinner.succeed(
            'Successfully completed initialisation of ' +
              result.config.portfolio
          );
          console.log('\f');
          process.exit(0);
        });
      })
      .catch(err => {
        spinner.fail(err);
        process.exit(1);
      });
  } else {
    ora().info(
      'Portfolio initialisation terminated so not to overwrite files.'
    );
    console.log('\f');
    process.exit(0);
  }
});
