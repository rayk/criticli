#!/usr/bin/env node --harmony

const listBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

listBenefit
  .description(
    "list all the benefits in the current project, refined based on any specified filter"
  )
  .parse(process.argv);
