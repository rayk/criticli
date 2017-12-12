#!/usr/bin/env node --harmony

const delBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

delBenefit
  .description(
    "permanently removes the specified benefit from the current default project"
  )
  .parse(process.argv);
