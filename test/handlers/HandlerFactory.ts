/* eslint-disable @typescript-eslint/no-require-imports */
import fs from 'fs';
import path from 'path';

import type { RequestHandler } from 'msw';

class HandlerFactory {
  private static findHandlerDirs(pathDir: string): string[] {
    let results: string[] = [];
    const dir = path.resolve(__dirname, pathDir);
    const list = fs.readdirSync(dir);

    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (file === '__handler__') {
          results.push(filePath);
        } else {
          results = results.concat(HandlerFactory.findHandlerDirs(filePath));
        }
      }
    }
    return results;
  }

  private static findHandlerFiles(handlerDir: string): string[] {
    return fs
      .readdirSync(handlerDir)
      .filter((file) => file.endsWith('.handler.ts') || file.endsWith('.handler.js'))
      .map((file) => path.join(handlerDir, file));
  }
  static create(rootPath: string): RequestHandler[] {
    const handlerDirs = HandlerFactory.findHandlerDirs(rootPath);
    const handlerFiles = handlerDirs.flatMap(HandlerFactory.findHandlerFiles);
    const handlers = handlerFiles.map((file) => require(file).default);

    return handlers;
  }
}

export default HandlerFactory;
