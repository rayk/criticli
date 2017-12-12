#!/usr/bin/env node --harmony

const editEnvelope = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

editEnvelope
  .description("properties that define the envelopes constraints.")
  .parse(process.argv);
