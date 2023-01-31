import { FETCH_CONTACTS_REQUEST_DONE, FETCH_CONTACTS_REQUEST_ERROR, FETCH_CONTACTS_REQUEST_START } from '../actions/contactAction'

const initialState = {
  contacts: [],
  loading: false,
  error: undefined,
};
export default function contact(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CONTACTS_REQUEST_DONE:
      const { data } = action;
      return {
        ...state,
        contact: data?.data,
        loaded: true,
        loading: false,
      };
    case FETCH_CONTACTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default:
      return state;
  }
}