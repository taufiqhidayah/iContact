
import ContactApi from "../api";

const contactApi = new ContactApi();
export const DELETE_CONTACTS_REQUEST_START = "DELETE_CONTACTS_REQUEST_START";
export const DELETE_CONTACTS_REQUEST_DONE = "DELETE_CONTACTS_REQUEST_DONE";
export const DELETE_CONTACTS_REQUEST_ERROR = "DELETE_CONTACTS_REQUEST_ERROR";

export function deleteContact(params) {
  return function (dispatch) {
    dispatch(deleteContactScreenApi());
    return contactApi.deleteContactApi(params)
      .then((data) => dispatch(deleteContactScreenRequestsDone(data)))
      .catch((error) => dispatch(deleteContactScreenRequestsError(error)));
  };
}

export function deleteContactScreenApi() {
  return { type: DELETE_CONTACTS_REQUEST_START };
}

export function deleteContactScreenRequestsDone(data) {
  return { type: DELETE_CONTACTS_REQUEST_DONE, data };
}

export function deleteContactScreenRequestsError(error) {
  return { type: DELETE_CONTACTS_REQUEST_ERROR, error };
}
