import React from 'react';
import { store } from '@app/store';
import { Provider } from 'react-redux';

export const withRedux = (Component: React.FC) => () =>
  (
    <Provider store={store}>
      <Component />
    </Provider>
  );
