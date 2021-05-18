import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  configureStore,
  getDefaultMiddleware,
  compose,
} from '@reduxjs/toolkit';

import DevTools from './DevTools';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];
const enhancer = compose(DevTools.instrument());

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: process.env.NODE_ENV !== 'production' ? [enhancer] : [],
});

const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export { store, persistor };
