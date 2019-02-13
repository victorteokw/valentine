import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './views/Root';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('application')
  );
};

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/Root', () => {
    const NewRoot = require('./views/Root').default;
    render(NewRoot);
  });
}
