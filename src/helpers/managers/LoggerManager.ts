/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import chalk from 'chalk';

import formatDateISO from '@utils/formatDateISO';
import isPlainObject from '@utils/isPlainObject';

/**
 * Manages logging for the application.
 */
class LoggerManager {
  private static color = new chalk.Instance({ level: 3 });

  private static format(message: Array<any>): string {
    const formattedMessage = message
      .map((chucks: any) =>
        isPlainObject(chucks) || Array.isArray(chucks) ? '\n' + JSON.stringify(chucks, null, 2) : chucks,
      )
      .join(' ');
    return `${this.color.dim(`[${formatDateISO(Date.now())}]::`)}${this.color.bold(formattedMessage)}`;
  }

  /**
   * Logs a debug message.
   *
   * @param message - The message to be logged.
   */
  static debug(...message: any): void {
    console.debug(this.color.underline(this.format(message)));
  }

  /**
   * Logs an error message.
   *
   * @param message - The message to be logged.
   */
  static error(...message: any): void {
    console.error(this.color.bgRed.whiteBright(this.format(message)));
  }

  /**
   * Logs an info message.
   *
   * @param message - The message to be logged.
   */
  static info(...message: any): void {
    console.log(this.color.bgCyanBright.black(this.format(message)));
  }

  /**
   * Logs a success message.
   *
   * @param message - The message to be logged.
   */
  static success(...message: any): void {
    console.info(this.color.bgGreenBright.black(this.format(message)));
  }

  /**
   * Logs a warning message.
   *
   * @param message - The message to be logged.
   */
  static warn(...message: any): void {
    console.warn(this.color.bgYellow.black(this.format(message)));
  }
}

export default LoggerManager;
