import produce from 'immer';
import { actionTypes } from './actions';

const initalState = {
  items: [],
  error: null,
};
export default function trade(state = initalState, action) {
  switch (action.type) {
    case actionTypes.GET_TRADES_SUCCESS: {
      return produce(state, param => {
        const draft = param;
        draft.items = action.payload;
      });
    }
    case actionTypes.GET_TRADES_FAILURE: {
      return produce(state, param => {
        const draft = param;
        draft.error = action.payload;
      });
    }
    case actionTypes.UPDATE_TRADE_STATUS_SUCCESS: {
      return produce(state, param => {
        const draft = param;
        draft.itens = draft.items.map(iten => {
          if (iten.id === action.payload.id) {
            return { ...param.items, status: action.payload.status };
          }
          return iten;
        });
      });
    }
    case actionTypes.UPDATE_TRADE_STATUS_FAILURE: {
      return produce(state, param => {
        const draft = param;
        draft.error = action.payload;
      });
    }
    default:
      return state;
  }
}
