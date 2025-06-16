import chalk from 'chalk';

export default function describeSelector(description: string, fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });

  describe(`${color.bgYellow.gray.bold('[SELECTOR]')} - ${color.yellow.bold(description)}`, fn);
}
