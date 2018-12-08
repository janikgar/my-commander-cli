#!/usr/bin/env node

import * as program from 'commander';
import chalk from 'chalk';

program
  .version('0.0.1')
  .option('-d, --today', 'Get today\'s weather')
  .option('-w, --week', 'Get this week\s weather')
  .parse(process.argv)

if (program.today) {
  console.log(chalk.blue('You\'ve asked for the weather for:'))
  console.log(" - Today");
}
if (program.week) {
  console.log(chalk.blue('You\'ve asked for the weather for:'))
  console.log(" - This week");
}
  