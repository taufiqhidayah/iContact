import {
  DELETE_CONTACTS_REQUEST_DONE,
  DELETE_CONTACTS_REQUEST_ERROR,
  DELETE_CONTACTS_REQUEST_START
} from '../actions/deleteContactAction'

const initialState = {
  loading: false,
  error: undefined,
};
export default function deleteContact(state = initialState, action) {
  switch (action.type) {
    case DELETE_CONTACTS_REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_CONTACTS_REQUEST_DONE:
      const { data } = action;
      return {
        ...state,
        loading: false,
      };
    case DELETE_CONTACTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
}