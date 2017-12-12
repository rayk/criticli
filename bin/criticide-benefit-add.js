#!/usr/bin/env node --harmony

const addBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

addBenefit
  .description("adds a new benefit to the current default project")
  .parse(process.argv);
