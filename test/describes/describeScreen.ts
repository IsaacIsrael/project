import chalk from 'chalk';

export default function describeScreen(description: string, fn: jest.EmptyFunction): void {
  const color = new chalk.Instance({ level: 3 });

  describe(`${color.bgMagenta.white.bold('[SCREEN]')} - ${color.magenta.bold(description)}`, fn);
}
