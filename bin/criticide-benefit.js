#!/usr/bin/env node --harmony

const benefit = require("commander");
const chalk = require("chalk");

console.log(chalk.green("\f  Current Default Project: "));

benefit.description(
  "operates on the benefits of the currently selected project."
);

benefit
  .command("add [label]", "benefit to current default project")
  .command("del [benefit]", "deletes the specified benefit")
  .command("edit [benefit]", "properties of the specified benefit")
  .command("list [filter]", "benefits matching the specified filter")
  .command("rank", "rank benefits failure impact")
  .command("show [benefit]", "all the details of the specified benefit");


benefit.parse(process.argv);
