/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import chalk from 'chalk';

import ReactotronManager from '@managers/ReactotronManager';
import formatDateISO from '@utils/formatDateISO';
import isPlainObject from '@utils/isPlainObject';

/**
 * Severity levels for logging.
 */
export enum Severity {
  debug = 1,
  error = 4,
  silent = 5,
  verbose = 2,
  warn = 3,
}

/**
 * Parameters for initializing the LoggerManager.
 */
export interface InitializeParams {
  /**
   * The severity level for logging.
   */
  severity?: Severity;
}

interface ReactotronLogFormat {
  title?: string;
  value: any;
}

/**
 * Manages logging for the application.
 */
class LoggerManager {
  private static color = new chalk.Instance({ level: 3 });
  private static severity: Severity;

  private static format(message: Array<any>): string {
    const formattedMessage = message
      .map((chucks: any) =>
        isPlainObject(chucks) || Array.isArray(chucks) ? '\n' + JSON.stringify(chucks, null, 2) : chucks,
      )
      .join(' ');
    return `${this.color.dim(`[${formatDateISO(Date.now())}]::`)}${this.color.bold(formattedMessage)}`;
  }

  private static formatReacttronMessage(message: Array<any>): ReactotronLogFormat {
    if (!Array.isArray(message)) {
      return {
        value: message,
      };
    }
    const [lastItem, ...rest] = message.reverse();
    const title = rest
      .reverse()
      .map((item) => `${item}`)
      .join(' ');

    return {
      title: title.trim(),
      value: lastItem,
    };
  }

  /**
   * Logs a debug message.
   *
   * @param message - The message to be logged.
   */
  static debug(...message: any): void {
    if (this.severity > Severity.debug) {
      return;
    }
    console.debug(this.color.underline(this.format(message)));
    const reactotronMessage = this.formatReacttronMessage(message);
    ReactotronManager.log(reactotronMessage.value, {
      label: 'DEBUG',
      title: reactotronMessage.title,
    });
  }

  /**
   * Logs an error message.
   *
   * @param message - The message to be logged.
   */
  static error(...message: any): void {
    if (this.severity > Severity.error) {
      return;
    }
    console.error(this.color.bgRed.whiteBright(this.format(message)));
    const reactotronMessage = this.formatReacttronMessage(message);
    ReactotronManager.log(reactotronMessage.value, {
      important: true,
      label: 'ERROR',
      title: reactotronMessage.title,
    });
  }

  /**
   * Logs an info message.
   *
   * @param message - The message to be logged.
   */
  static info(...message: any): void {
    if (this.severity > Severity.verbose) {
      return;
    }
    console.log(this.color.bgCyanBright.black(this.format(message)));
    const reactotronMessage = this.formatReacttronMessage(message);
    ReactotronManager.log(reactotronMessage.value, {
      important: true,
      label: 'INFO',
      title: reactotronMessage.title,
    });
  }

  /**
   * Initializes the LoggerManager.
   *
   * @param params - The initialization parameters.
   */
  static initialize({ severity }: InitializeParams): void {
    this.severity = severity ?? Severity.verbose;
  }

  /**
   * Logs a success message.
   *
   * @param message - The message to be logged.
   */
  static success(...message: any): void {
    if (this.severity > Severity.verbose) {
      return;
    }
    console.info(this.color.bgGreenBright.black(this.format(message)));
    const reactotronMessage = this.formatReacttronMessage(message);
    ReactotronManager.log(reactotronMessage.value, {
      important: true,
      label: 'SUCCESS',
      title: reactotronMessage.title,
    });
  }

  /**
   * Logs a warning message.
   *
   * @param message - The message to be logged.
   */
  static warn(...message: any): void {
    if (this.severity > Severity.warn) {
      return;
    }
    console.warn(this.color.bgYellow.black(this.format(message)));
    const reactotronMessage = this.formatReacttronMessage(message);
    ReactotronManager.log(reactotronMessage.value, {
      important: true,
      label: 'WARN',
      title: reactotronMessage.title,
    });
  }
}

export default LoggerManager;
