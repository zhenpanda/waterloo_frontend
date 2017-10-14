import { combineReducers } from 'redux';
import waterlooReducer from './waterloo_reducer';

// state: (state = {}) => state

//authenticated is a piece of state
const rootReducer = combineReducers({
  waterloo: waterlooReducer
});

export default rootReducer;
