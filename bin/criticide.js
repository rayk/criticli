#!/usr/bin/env node --harmony

const cli = require("commander");
const pkg = require("../package");
const chalk = require("chalk");

console.log(chalk.yellow.bold("Criticide CLI - " + pkg.version));
cli
  .version(pkg.version)
  .description(
    "Criticide CLI allows you to model and simulate software development projects."
  );

cli.command("project [action]", "create and manage projects.").alias("p");
cli
  .command("benefit [action]", "manage and rank a projects benefits.")
  .alias("b");
cli
  .command("envelope [action]", "work with a projects opportunity envelop")
  .alias("e");
cli
  .command("observe [action]", "manage observations of the software")
  .alias("o");

cli.parse(process.argv);
