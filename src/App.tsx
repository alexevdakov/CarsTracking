import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { GlobalStyle } from 'styles';

import { store, persistor, DevTools } from 'store';

import { AppRouter } from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {process.env.NODE_ENV === 'development' && <DevTools />}
        <AppRouter />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}
