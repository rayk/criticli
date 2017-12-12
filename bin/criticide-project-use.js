#!/usr/bin/env node --harmony

const useProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

useProject
  .description("Uses the specified project as the default.")
  .parse(process.argv);
