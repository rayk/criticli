#!/usr/bin/env node --harmony

const project = require("commander");
const chalk = require("chalk");

project.description("manage opportunity envelope.");

project
  .command("edit [envelope]", "properties of the specified envelop")
  .command("list [project]", "list all the envelope for a specified project")
  .command("open [project]", "new envelope for the specified project.")
  .command("plot [envelope]", "graph of the specified envelope");

project.parse(process.argv);
