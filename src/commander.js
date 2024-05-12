import { Command, Option } from 'commander';
import { HandlerMain } from './handlers/handler.main.js';
export const programPrepared = new Command();

const handler = new HandlerMain();

console.log(handler);

programPrepared
  .name('page-loader')
  .description('Page loader utility')
  .argument('<url>')
  .option('-V, --version', 'output the version number')
  .option('-o --output [dir]', 'output dir', '/home/user/current-dir')
  .action(handler.action);
