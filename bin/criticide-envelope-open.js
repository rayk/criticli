#!/usr/bin/env node --harmony

const openEnvelope = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

openEnvelope
  .description(
    "new opportunity envelope for the specified project, default project is used if not specified."
  )
  .parse(process.argv);
