import { createStore, compose, applyMiddleware } from 'redux';
import tron from '~/config/reactotron-config';

export default (reducers, middlawares) => {
  // eslint-disable-next-line no-undef
  const enhancer = __DEV__
    ? compose(
        // eslint-disable-next-line no-console
        tron.createEnhancer(),
        applyMiddleware(...middlawares)
      )
    : applyMiddleware(...middlawares);
  return createStore(reducers, enhancer);
};
