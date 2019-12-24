import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootSaga from '../root_saga';
import rootReducer from '../root_reducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) => {
  const saga = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(saga, logger),
    )
  )
  saga.run(rootSaga);
  return store
  };

export default configureStore;