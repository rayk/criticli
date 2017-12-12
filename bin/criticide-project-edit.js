#!/usr/bin/env node --harmony

const editProject = require("commander");
const ask = require("inquirer");
const R = require("ramda");
const S = require("string");

editProject.description("edits properties of the project.").parse(process.argv);
