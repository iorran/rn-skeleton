import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './create-store';
import persistReducers from './persist-reducers';

import rootReducer from './modules/root-reducer';
import rootSaga from './modules/root-saga';

import tron from '~/config/reactotron-config';

// eslint-disable-next-line no-undef
const sagaMonitor = __DEV__ ? tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
