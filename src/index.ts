import * as program from 'commander';
import chalk from 'chalk';

program
  .version('0.0.1')
  .option('-d, --today', 'Get today\'s weather')
  .option('-w, --week', 'Get this week\s weather')
  .parse(process.argv)

if (program.args.length != 0) {
  console.log(chalk.blue('You\'ve asked for the weather for:'))
  if (program.today) {
    console.log(chalk.yellowBright(" - Today"));
  }
  if (program.week) {
    console.log(chalk.green(" - This week"));
  }
} else {
  program.help();
}