import { combineReducers } from 'redux';
import customerReducer from './reducer';

const rootReducer = combineReducers({
  customers: customerReducer,
});

export default rootReducer;
