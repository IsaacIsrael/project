import LoggerManager, { Severity } from 'helpers/managers/LoggerManager';
import getObjectDiff from 'helpers/utils/getObjectDiff';

import type { Middleware, MiddlewareAPI, UnknownAction } from '@reduxjs/toolkit';

const disableLogAction = (action: UnknownAction): boolean =>
  action.type.endsWith('/pending') ||
  action.type.endsWith('/fulfilled') ||
  action.type.endsWith('/rejected') ||
  action.type.startsWith('requests/') ||
  action.type.startsWith('persist/') ||
  LoggerManager.severity > Severity.debug;

const loggerMiddleware: Middleware =
  (api: MiddlewareAPI) => (next: (action: unknown) => unknown) => (action: unknown) => {
    if (disableLogAction(action as UnknownAction)) {
      return next(action);
    }
    const prevState = api.getState();
    const result = next(action);
    const nextState = api.getState();

    LoggerManager.debug('Action:', action);
    const diff = getObjectDiff(nextState, prevState);

    LoggerManager.debug('State diff:', diff);
    return result;
  };

export default loggerMiddleware;
