import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import DevTools from './DevTools';

export default createStore(
  rootReducer,
  {},
  compose(
    DevTools.instrument()
  )
);
