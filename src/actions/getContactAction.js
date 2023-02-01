
import ContactApi from "../api";

const contactApi = new ContactApi();
export const FETCH_CONTACTS_REQUEST_START = "FETCH_CONTACTS_REQUEST_START";
export const FETCH_CONTACTS_REQUEST_DONE = "FETCH_CONTACTS_REQUEST_DONE";
export const FETCH_CONTACTS_REQUEST_ERROR = "FETCH_CONTACTS_REQUEST_ERROR";

export function fetchContact(params) {
  return function (dispatch) {
    dispatch(fetchContactScreenApi());
    return contactApi.homeScreenApi(params)
      .then((data) => dispatch(fetchContactScreenRequestsDone(data)))
      .catch((error) => dispatch(fetchContactScreenRequestsError(error)));
  };
}

export function fetchContactScreenApi() {
  return { type: FETCH_CONTACTS_REQUEST_START };
}

export function fetchContactScreenRequestsDone(data) {
  return { type: FETCH_CONTACTS_REQUEST_DONE, data };
}

export function fetchContactScreenRequestsError(error) {
  return { type: FETCH_CONTACTS_REQUEST_ERROR, error };
}
