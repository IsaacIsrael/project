import chalk from 'chalk';

export default function describeSlice(description: string, fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });

  describe(`${color.bgCyan.gray.bold('[SLICE]')} - ${color.cyan.bold(description)}`, fn);
}
