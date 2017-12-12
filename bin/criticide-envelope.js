#!/usr/bin/env node --harmony

const project = require("commander");
const chalk = require("chalk");

project.description("manage opportunity envelope.");

project
  .command("open [project]", "Opportunity envelope for the specified project.")
  .command("plot [benefit]", "deletes the specified project")
  .command("edit [benefit]", "properties of the specified project");

project.parse(process.argv);
