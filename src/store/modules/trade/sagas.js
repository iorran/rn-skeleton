import { takeLatest, call, put, all } from 'redux-saga/effects';
import { GET_TRADES_REQUEST, getTradesSuccess } from './actions';
import api from '~/services/api';

export function* getTrades() {
  const response = yield call(api.get, 'trades');
  const { data } = response;
  yield put(getTradesSuccess(data));
}

export default all([takeLatest(GET_TRADES_REQUEST, getTrades)]);
