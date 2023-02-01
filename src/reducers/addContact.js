import {
  ADD_CONTACTS_REQUEST_DONE,
  ADD_CONTACTS_REQUEST_ERROR,
  ADD_CONTACTS_REQUEST_START,
} from '../actions/addContactAction'

const initialState = {
  loading: false,
  error: undefined,
};
export default function addContact(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACTS_REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CONTACTS_REQUEST_DONE:
      const { data } = action;
      return {
        ...state,
        loading: false,
      };
    case ADD_CONTACTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
}