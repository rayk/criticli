#!/usr/bin/env node --harmony

const listProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

listProject
  .description(
    "displays a list of all projects, passing in a filter refines this list."
  )
  .parse(process.argv);
