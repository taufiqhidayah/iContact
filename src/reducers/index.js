import { combineReducers } from 'redux';
import addContact from './addContact';
import contact from './getContact';

const appReducer = combineReducers({
  contact,
  addContact
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
