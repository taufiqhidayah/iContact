
import ContactApi from "../api";

const contactApi = new ContactApi();
export const ADD_CONTACTS_REQUEST_START = "ADD_CONTACTS_REQUEST_START";
export const ADD_CONTACTS_REQUEST_DONE = "ADD_CONTACTS_REQUEST_DONE";
export const ADD_CONTACTS_REQUEST_ERROR = "ADD_CONTACTS_REQUEST_ERROR";

export function addContact(params) {
  return function (dispatch) {
    dispatch(addContactScreenApi());
    return contactApi.addContactApi(params)
      .then((data) => dispatch(addContactScreenRequestsDone(data)))
      .catch((error) => dispatch(addContactScreenRequestsError(error)));
  };
}

export function addContactScreenApi() {
  return { type: ADD_CONTACTS_REQUEST_START };
}

export function addContactScreenRequestsDone(data) {
  return { type: ADD_CONTACTS_REQUEST_DONE, data };
}

export function addContactScreenRequestsError(error) {
  return { type: ADD_CONTACTS_REQUEST_ERROR, error };
}
