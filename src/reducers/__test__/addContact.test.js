import addContact from '../addContact';
import {
    ADD_CONTACTS_REQUEST_DONE,
    ADD_CONTACTS_REQUEST_ERROR,
    ADD_CONTACTS_REQUEST_START,
} from '../../actions/addContactAction'

describe('addContact reducer', () => {
    it('handles ADD_CONTACTS_REQUEST_START', () => {
        const action = {
            type: ADD_CONTACTS_REQUEST_START,
        };
        const newState = addContact(undefined, action);
        expect(newState).toEqual({
            loading: true,
            error: null,
        });
    });

    it('handles ADD_CONTACTS_REQUEST_DONE', () => {
        const action = {
            type: ADD_CONTACTS_REQUEST_DONE,
            data: [],
        };
        const newState = addContact(undefined, action);
        expect(newState).toEqual({
            loading: false,
        });
    });

    it('handles ADD_CONTACTS_REQUEST_ERROR', () => {
        const action = {
            type: ADD_CONTACTS_REQUEST_ERROR,
            error: 'Error message',
        };
        const newState = addContact(undefined, action);
        expect(newState).toEqual({
            loading: false,
            error: 'Error message',
        });
    });

    it('returns the original state for unknown action type', () => {
        const action = {
            type: 'UNKNOWN',
        };
        const initialState = {
            loading: false,
            error: 'Error message',
        };
        const newState = addContact(initialState, action);
        expect(newState).toEqual(initialState);
    });
});