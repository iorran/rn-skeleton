import produce from 'immer';
import { GET_TRADES_SUCCESS } from './actions';

const initalState = {
  trades: [],
};
export default function trade(state = initalState, action) {
  switch (action.type) {
    case GET_TRADES_SUCCESS:
      return produce(state, param => {
        const draft = param;
        draft.trades = action.payload.trades;
      });
    default:
      return state;
  }
}
