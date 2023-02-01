import { combineReducers } from 'redux';
import addContact from './addContact';
import deleteContact from './deleteContact';
import contact from './getContact';
import contactById from './getContactById';

const appReducer = combineReducers({
  contact,
  addContact,
  deleteContact,
  contactById
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
