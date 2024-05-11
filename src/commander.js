import { Command, Option } from 'commander';
export const programPrepared = new Command();

programPrepared
  .name('page-loader')
  .description('Page loader utility')
  .argument('<url>')
  .option('-V, --version', 'output the version number')
  .addOption(new Option('-o --output [dir]', 'output dir').default('/home/user/current-dir'))
  .option('-h, --help', 'display help for command')
  .help();
