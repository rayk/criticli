#!/usr/bin/env node --harmony

const addObserve = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

addObserve
  .description(
    "Adds a new observation to specified project about benefits in the built software. Default used when unspecified."
  )
  .parse(process.argv);
