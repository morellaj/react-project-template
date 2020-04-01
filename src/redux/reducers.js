import { combineReducers } from 'redux';

function unitReducer(state = { unitSelected: 'I-1' }, action) {
  switch (action.type) {
    case 'SET_UNIT':
      return {
        unitSelected: action.payload
      };
    default:
      return state;
  }
}

function infoReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_INFO':
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ unitReducer, infoReducer });

export default rootReducer;
