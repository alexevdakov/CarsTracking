import { combineReducers } from 'redux';

import { tableReducer } from 'modules';

export const rootReducer = combineReducers({
  table: tableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
