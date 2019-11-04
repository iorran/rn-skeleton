import { takeLatest, call, put, all } from 'redux-saga/effects';
import actions, { actionTypes } from './actions';
import api from '~/services/api';

export function* getTrades() {
  try {
    const response = yield call(api.get, 'trades');
    const { data } = response;
    yield put(actions.getTradesSuccess(data));
  } catch (error) {
    yield put(actions.getTradesFailure(error));
  }
}

export function* updateTradeStatus({ payload }) {
  const { id, status } = payload;
  try {
    const response = yield call(api.put, `trades/${id}`, { status });
    const { data } = response;
    yield put(actions.updateTradeStatusSuccess(data));
  } catch (error) {
    yield put(actions.updateTradeStatusFailure(error));
  }
}

export default all([
  takeLatest(actionTypes.GET_TRADES_REQUEST, getTrades),
  takeLatest(actionTypes.UPDATE_TRADE_STATUS_REQUEST, updateTradeStatus),
]);
