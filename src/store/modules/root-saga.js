import { all } from 'redux-saga/effects';

import trade from './trade/sagas';

export default function* rootSaga() {
  return yield all([trade]);
}
