
import ContactApi from "../api";

const contactApi = new ContactApi();
export const FETCH_CONTACTS_ID_REQUEST_START = "FETCH_CONTACTS_ID_REQUEST_START";
export const FETCH_CONTACTS_ID_REQUEST_DONE = "FETCH_CONTACTS_ID_REQUEST_DONE";
export const FETCH_CONTACTS_ID_REQUEST_ERROR = "FETCH_CONTACTS_ID_REQUEST_ERROR";

export function fetchContactIdById(params) {
  return function (dispatch) {
    dispatch(fetchContactIdScreenApi());
    return contactApi.getContactByIdApi(params)
      .then((data) => dispatch(fetchContactIdScreenRequestsDone(data)))
      .catch((error) => dispatch(fetchContactIdScreenRequestsError(error)));
  };
}

export function fetchContactIdScreenApi() {
  return { type: FETCH_CONTACTS_ID_REQUEST_START };
}

export function fetchContactIdScreenRequestsDone(data) {
  return { type: FETCH_CONTACTS_ID_REQUEST_DONE, data };
}

export function fetchContactIdScreenRequestsError(error) {
  return { type: FETCH_CONTACTS_ID_REQUEST_ERROR, error };
}
