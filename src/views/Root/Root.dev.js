import React from 'react';
import { Provider } from 'react-redux';
import DevTools from 'store/DevTools';
import App from 'views/App';

export default ({ store }) => (
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <App />
      <DevTools />
    </div>
  </Provider>
);
