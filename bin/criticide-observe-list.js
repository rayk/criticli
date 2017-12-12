#!/usr/bin/env node --harmony

const listObserve = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

listObserve
  .description(
    "List all observations the current default or the specified project."
  )
  .option(
    "-p, --project [project]",
    "specify a project to list observations for"
  )
  .option("-b, --before [date]", "include observations before this date")
  .option("-a, --after [date]", "include observation after this date")
  .parse(process.argv);
