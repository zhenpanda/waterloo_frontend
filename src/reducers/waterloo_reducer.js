import { FETCH_TEST } from '../actions/types';

// returns boolean
export default function(state={}, action) {
  switch (action.type) {
    case 'web3/RECEIVE_ACCOUNT':
      return {...state, ethAddress: action.address};
    case 'web3/CHANGE_ACCOUNT':
      return {...state, ethAddress: action.address};
    case FETCH_TEST:
      return {...state, test: action.payload};
    default: break;
  }
  return state;
}
