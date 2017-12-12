#!/usr/bin/env node --harmony

const listEnvelope = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

listEnvelope
  .description(
    "all the envelopes associated with specified project, default project used if not specified."
  )
  .parse(process.argv);
