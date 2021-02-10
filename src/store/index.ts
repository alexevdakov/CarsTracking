import { ThunkAction, Action } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

import { store, persistor } from './configureStore';
import DevTools from './DevTools';

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { store, persistor, DevTools };
