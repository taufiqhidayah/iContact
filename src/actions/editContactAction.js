
import ContactApi from "../api";

const contactApi = new ContactApi();
export const UPDATE_CONTACTS_REQUEST_START = "UPDATE_CONTACTS_REQUEST_START";
export const UPDATE_CONTACTS_REQUEST_DONE = "UPDATE_CONTACTS_REQUEST_DONE";
export const UPDATE_CONTACTS_REQUEST_ERROR = "UPDATE_CONTACTS_REQUEST_ERROR";

export function updateContact(params, body) {
  return function (dispatch) {
    dispatch(updateContactScreenApi());
    return contactApi.updateContactApi(params, body)
      .then((data) => dispatch(updateContactScreenRequestsDone(data)))
      .catch((error) => dispatch(updateContactScreenRequestsError(error)));
  };
}

export function updateContactScreenApi() {
  return { type: UPDATE_CONTACTS_REQUEST_START };
}

export function updateContactScreenRequestsDone(data) {
  return { type: UPDATE_CONTACTS_REQUEST_DONE, data };
}

export function updateContactScreenRequestsError(error) {
  return { type: UPDATE_CONTACTS_REQUEST_ERROR, error };
}
