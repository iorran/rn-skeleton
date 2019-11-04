export const actionTypes = {
  GET_TRADES_REQUEST: '@trade/GET_TRADES_REQUEST',
  GET_TRADES_SUCCESS: '@trade/GET_TRADES_SUCCESS',
  GET_TRADES_FAILURE: '@trade/GET_TRADES_FAILURE',
  UPDATE_TRADE_STATUS_REQUEST: '@trade/UPDATE_TRADE_STATUS_REQUEST',
  UPDATE_TRADE_STATUS_SUCCESS: '@trade/UPDATE_TRADE_STATUS_SUCCESS',
  UPDATE_TRADE_STATUS_FAILURE: '@trade/UPDATE_TRADE_STATUS_FAILURE',
};

const actions = {
  getTrades: () => {
    return { type: actionTypes.GET_TRADES_REQUEST };
  },
  getTradesSuccess: trades => {
    return {
      type: actionTypes.GET_TRADES_SUCCESS,
      payload: trades,
    };
  },
  getTradesFailure: () => {
    return {
      type: actionTypes.GET_TRADES_FAILURE,
      payload: 'Something wrong happens',
    };
  },
  updateTradeStatus: (id, status) => {
    return {
      type: actionTypes.UPDATE_TRADE_STATUS_REQUEST,
      payload: { id, status },
    };
  },
  updateTradeStatusSuccess: data => {
    return {
      type: actionTypes.UPDATE_TRADE_STATUS_SUCCESS,
      payload: data,
    };
  },
  updateTradeStatusFailure: () => {
    return {
      type: actionTypes.UPDATE_TRADE_STATUS_FAILURE,
      payload: 'Something wrong happens',
    };
  },
};

export default actions;
