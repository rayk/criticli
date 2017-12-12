#!/usr/bin/env node --harmony

const listObserve = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

listObserve
  .description("observations that match the specified filter.")
  .parse(process.argv);
