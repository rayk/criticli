#!/usr/bin/env node --harmony

const project = require("commander");
const chalk = require("chalk");

console.log(chalk.green("\f  Current Default Project: "));

project.description(
  "operates on the benefits of the currently selected project."
);

project
  .command("add [label]", "benefit to current default project")
  .command("del [benefit]", "deletes the specified project")
  .command("edit [benefit]", "properties of the specified project")
  .command("list [filter]", "projects matching the specified filter")
  .command("show", "all the details of the specified project");

project.parse(process.argv);
