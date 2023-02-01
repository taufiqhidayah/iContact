import {
    UPDATE_CONTACTS_REQUEST_DONE,
    UPDATE_CONTACTS_REQUEST_ERROR,
    UPDATE_CONTACTS_REQUEST_START
} from '../actions/editContactAction'

const initialState = {
    loading: false,
    error: undefined,
};
export default function addContact(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CONTACTS_REQUEST_START:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_CONTACTS_REQUEST_DONE:
            return {
                ...state,
                loading: false,
            };
        case UPDATE_CONTACTS_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action?.error,
            };
        default:
            return state;
    }
}