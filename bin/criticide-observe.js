#!/usr/bin/env node --harmony

const project = require("commander");
const chalk = require("chalk");

project.description("manage opportunity envelope.");

project
  .command("add [project]", "observation for specified project.")
  .command("list [filter]", "observations which match the specific filter")
  .command("del [obId..]", "permanently remove specified observations");

project.parse(process.argv);
