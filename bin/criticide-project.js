#!/usr/bin/env node --harmony

const project = require("commander");
const R = require("ramda");
const chalk = require("chalk");

console.log(chalk.green("\f  Current Default Project: \f"));

project.description(
  "Operates on a specified project if not explicitly given all actions are applied to the default project."
);

project
  .command("add [name]", "create new project for modeling and simulation")
  .command("del [project]", "deletes the specified project")
  .command("edit [project]", "properties of the specified project")
  .command("list [filter]", "projects matching the specified filter")
  .command("show [project]", "all the details of the specified project")
  .command("use [project]", "as the default project");

project.parse(process.argv);
