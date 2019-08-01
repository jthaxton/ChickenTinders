
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootSaga from './root_saga';
import rootReducer from './root_reducer';
import createSagaMiddleware from 'redux-saga';

const configureStore = (preloadedState = {}) => {
  const saga = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(saga, logger)
  )
  saga.run(rootSaga);
  return store
  };

export default configureStore;