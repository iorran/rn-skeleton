import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlawares) => {
  // eslint-disable-next-line no-undef
  const enhancer = __DEV__
    ? compose(
        // eslint-disable-next-line no-console
        console.tron.createEnhancer(),
        applyMiddleware(...middlawares)
      )
    : applyMiddleware(...middlawares);
  return createStore(reducers, enhancer);
};
