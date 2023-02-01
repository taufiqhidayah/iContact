import {
  FETCH_CONTACTS_ID_REQUEST_DONE,
  FETCH_CONTACTS_ID_REQUEST_ERROR,
  FETCH_CONTACTS_ID_REQUEST_START
} from '../actions/getContactByIdAction'

const initialState = {
  contact: [],
  loading: false,
  error: undefined,
};
export default function contactById(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_ID_REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CONTACTS_ID_REQUEST_DONE:
      const { data } = action;
      return {
        ...state,
        contact: data?.data,
        error: data,
        loading: false,
      };
    case FETCH_CONTACTS_ID_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: data?.data,
      };
    default:
      return state;
  }
}