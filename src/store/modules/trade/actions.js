export const GET_TRADES_REQUEST = '@trade/GET_TRADES_REQUEST';
export const GET_TRADES_SUCCESS = '@trade/GET_TRADES_SUCCESS';
export const GET_TRADES_FAILURE = '@trade/GET_TRADES_FAILURE';

export function getTrades() {
  return {
    type: GET_TRADES_REQUEST,
  };
}

export function getTradesSuccess(trades) {
  return {
    type: GET_TRADES_SUCCESS,
    payload: trades,
  };
}

export function getTradesFailure() {
  return {
    type: GET_TRADES_FAILURE,
  };
}
