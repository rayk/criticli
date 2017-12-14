#!/usr/bin/env node --harmony

const project = require("commander");
const R = require("ramda");
const chalk = require("chalk");
const store = require("../dist/lib/store");
const select = require("./elements/select");
const out = message => console.log(message);

const currentProject = R.prop("name", R.head(select.currentProject(store)));

out(chalk.yellow("\f  Current Default Project: " + currentProject + "\f"));

project.description(
  "Operates on a specified project if not explicitly given all actions are applied to the default project."
);

project
  .command("add [name]", "create new project for modeling and simulation")
  .command(
    "del",
    "deletes current default project, previous default becomes new default"
  )
  .command("edit", "properties of the current default project")
  .command("list", "all projects which criticide is tracking")
  .command("show", "all the details of the current default project")
  .command("use [project]", "as the new default project");

project.parse(process.argv);
