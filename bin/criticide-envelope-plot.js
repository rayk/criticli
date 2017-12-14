#!/usr/bin/env node --harmony

const plotEnvelope = require('commander');
const ask = require('inquirer');
const R = require('ramda');
const S = require('string');

plotEnvelope
  .description('graph of the specified envelope, output SVG file to disk')
  .parse(process.argv);
