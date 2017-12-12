#!/usr/bin/env node --harmony

const editBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

editBenefit
  .description("edits the specified benefit in the default project")
  .parse(process.argv);
