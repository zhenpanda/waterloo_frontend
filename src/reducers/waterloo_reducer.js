import { FETCH_TEST,TOKENS_TEST,FETCH_WEB3 } from '../actions/types';

// returns boolean
export default function(state={}, action) {
  switch (action.type) {
    case FETCH_TEST:
      return {...state, test: action.payload};
    case TOKENS_TEST:
      return {...state, tokens: action.payload};
    case FETCH_WEB3:
      return {...state, web3: action.payload};
    default: break;
  }
  return state;
}
