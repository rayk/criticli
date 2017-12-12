#!/usr/bin/env node --harmony

const editProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

editProject
  .description(
    "Edits properties of the specified project, when unspecified default project used."
  )
  .option("-p, --project [project]", "specify the project to edit")
  .option("-n, --name [newName]", "changes the project name to specified name")
  .option("-b, --base [date]", "changes the base start date of the project")
  .option(
    "-a --active",
    "changes the project to an active status, calculations are automatically executed when new data is provided."
  )
  .option(
    "-i --inactive",
    "changes the project to inactive, pausing automatic calculations."
  )
  .parse(process.argv);
