#!/usr/bin/env node --harmony

const addProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

const project = require("../lib/project.js");

const readInput = cliInput =>
  R.dissoc(
    "args",
    R.assoc(
      "name",
      R.head(cliInput.args),
      R.pickAll(["args", "force", "default"], cliInput)
    )
  );

const askUser = async payload => {
  return await ask.prompt([
    {
      type: "input",
      name: "name",
      message: "What name would you like to give this project",
      validate: value =>
        R.isEmpty(value) ? "A project requires a name" : true,
      filter: value => S(value).titleCase().s
    },
    {
      type: "confirm",
      name: "force",
      message: "Overwrite exist project with the same name",
      default: R.not(R.isNil(payload.force))
    },
    {
      type: "confirm",
      name: "default",
      message: "Set this new project as the default project",
      default: R.not(R.isNil(payload.default))
    }
  ]);
};

addProject
  .description("Creates a new project for modeling and simulation.")
  .option(
    "-d --default",
    "set the newly created project as the default project."
  )
  .option(
    "-f --force",
    "overwrites any existing project that has the same name, all associated project data is removed."
  )
  .parse(process.argv);

askUser(addProject).then(result => console.log(result));
