#!/usr/bin/env node --harmony

const showProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

showProject
  .description("shows the details of the specified project.")
  .parse(process.argv);
