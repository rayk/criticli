#!/usr/bin/env node --harmony

const rankBenefit = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

rankBenefit
  .description(
    "ranks the benefits of the current default projects in terms of their failure impact."
  )
  .parse(process.argv);
