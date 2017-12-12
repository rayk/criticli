#!/usr/bin/env node --harmony

const delBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

delBenefit
  .description(
    "Permanently removes the specified benefit from the current project unless an ID is specified."
  )
  .option(
    "-i, --id [benefitID]",
    "specific benefit, could be located in any project"
  )
  .parse(process.argv);
