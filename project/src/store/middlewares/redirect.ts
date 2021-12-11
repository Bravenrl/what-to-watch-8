import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { State } from '../../types/state';
import { MiddlewareAction } from '../../types/middleware-action';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === MiddlewareAction.RedirectToRoute) {
          browserHistory.push(action.payload);
        }
        return next(action);
      };

