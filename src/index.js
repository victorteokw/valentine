import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './views/App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('application')
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NewApp = require('./views/App').default;
    render(NewApp);
  });
}
