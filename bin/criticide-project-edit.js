#!/usr/bin/env node --harmony

const editProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

const input = require("./elements/readInput");
const select = require("./elements/selector");
const store = require("../lib/store");

const projectList = select.allProjects(store);

const askUser = async payload => {
  return await ask
    .prompt([
      {
        type: "list",
        name: "project",
        message: "Which project do you wish to edit",
        choices: R.map(R.prop("name"), projectList)
      },
      {
        type: "input",
        name: "name",
        message: "Project Name",
        default: value => value.project
      },
      {
        type: "input",
        name: "description",
        message: "Project Description",
        default: value =>
          select.valueProjectDescription(
            R.head(select.projectByName(value.project, projectList))
          )
      },
      {
        type: "confirm",
        name: "isDefault",
        message: "Set as default project",
        default: value =>
          select.valueProjectIsDefault(
            R.head(select.projectByName(value.project, projectList))
          )
      },
      {
        type: "confirm",
        name: "isActive",
        message: "Set project as active",
        default: value =>
          select.valueProjectIsActive(
            R.head(select.projectByName(value.project, projectList))
          )
      }
    ])
    .then(collected => {
      return R.merge(payload, collected);
    });
};

editProject
  .description(
    "Edits properties of the specified project, when unspecified default project used."
  )
  .option("-p, --project [project]", "specify the project to edit")
  .option("-n, --name [newName]", "changes the project name to specified name")
  .option("-b, --base [date]", "changes the base start date of the project")
  .option(
    "-a, --active",
    "activate projects, automatically execute calculations when new data is entered"
  )
  .option(
    "-i, --inactive",
    "deactivate project, pausing automatic calculations"
  )
  .parse(process.argv);

askUser(input.mapFromCli(editProject)).then(answer => {
  console.log("Payload for Action => " + JSON.stringify(answer));
});
