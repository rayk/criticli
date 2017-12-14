#!/usr/bin/env node --harmony

const project = require('commander');
const chalk = require('chalk');

project.description(
  'manage opportunity envelopes, commands applied to current project unless specified.'
);

project
  .command('edit [name]', 'opportunity envelope properties.')
  .command('list', 'all the envelope')
  .command('open', 'new opportunity envelope.')
  .command('plot [envelope]', 'graph of the specified envelope.');

project.parse(process.argv);
