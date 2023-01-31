
import ContactApi from "../api";

const contactApi = new ContactApi();
export const FETCH_CONTACTS_REQUEST_START = "FETCH_CONTACTS_REQUEST_START";
export const FETCH_CONTACTS_REQUEST_DONE = "FETCH_CONTACTS_REQUEST_DONE";
export const FETCH_CONTACTS_REQUEST_ERROR = "FETCH_CONTACTS_REQUEST_ERROR";

export function fetchContact(params) {
  return function (dispatch) {
    dispatch(fetchHomeScreenApi());
    return contactApi.homeScreenApi(params)
      .then((data) => dispatch(fetchHomeScreenRequestsDone(data)))
      .catch((error) => dispatch(fetchHomeScreenRequestsError(error)));
  };
}

export function fetchHomeScreenApi() {
  return { type: FETCH_CONTACTS_REQUEST_START };
}

export function fetchHomeScreenRequestsDone(data) {
  return { type: FETCH_CONTACTS_REQUEST_DONE, data };
}

export function fetchHomeScreenRequestsError(error) {
  return { type: FETCH_CONTACTS_REQUEST_ERROR, error };
}
