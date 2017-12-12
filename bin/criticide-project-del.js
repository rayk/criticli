#!/usr/bin/env node --harmony

const delProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

delProject
  .description("permanently deletes the specified project.")
  .parse(process.argv);
