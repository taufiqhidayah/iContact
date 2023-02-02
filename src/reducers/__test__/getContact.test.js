import contactReducer from '../getContact';
import { FETCH_CONTACTS_REQUEST_DONE, FETCH_CONTACTS_REQUEST_ERROR, FETCH_CONTACTS_REQUEST_START } from '../../actions/getContactAction';

describe('contact reducer', () => {
    it('handles FETCH_CONTACTS_REQUEST_START', () => {
        const action = {
            type: FETCH_CONTACTS_REQUEST_START,
        };

        const state = contactReducer(undefined, action);
        expect(state).toEqual({
            contact: [],
            loading: true,
            error: null,
        });
    });

    it('handles FETCH_CONTACTS_REQUEST_DONE', () => {
        const data = { data: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
        const action = {
            type: FETCH_CONTACTS_REQUEST_DONE,
            data,
        };

        const state = contactReducer(undefined, action);
        expect(state).toEqual({
            contact: data.data,
            loaded: true,
            loading: false,
        });
    });

    it('handles FETCH_CONTACTS_REQUEST_ERROR', () => {
        const action = {
            type: FETCH_CONTACTS_REQUEST_ERROR,
        };

        const state = contactReducer(undefined, action);
        expect(state).toEqual({
            contact: [],
            loading: false,
        });
    });
});