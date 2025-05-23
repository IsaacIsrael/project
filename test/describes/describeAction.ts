import chalk from 'chalk';

export default function describeAction(description: string, fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });

  describe(`${color.bgBlue.blackBright.bold('[ACTION]')} - ${color.blue.bold(description)}`, fn);
}
