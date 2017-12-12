#!/usr/bin/env node --harmony

const project = require("commander");
const chalk = require("chalk");

project.description("manage opportunity envelope.");

project
  .command("add [project]", "new observation")
  .command("list [filter]", "list observations which match the filter")
  .command("del [obId..]", "remove specified observations");

project.parse(process.argv);
