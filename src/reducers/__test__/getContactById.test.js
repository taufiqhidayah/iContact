import {
    FETCH_CONTACTS_ID_REQUEST_DONE,
    FETCH_CONTACTS_ID_REQUEST_ERROR,
    FETCH_CONTACTS_ID_REQUEST_START,
} from '../../actions/getContactByIdAction';
import contactById from '../getContactById';

describe('contactById reducer', () => {
    it('handles FETCH_CONTACTS_ID_REQUEST_START', () => {
        const action = {
            type: FETCH_CONTACTS_ID_REQUEST_START,
        };

        const state = contactById(undefined, action);
        expect(state).toEqual({
            contact: [],
            loading: true,
            error: null,
        });
    });

    // it('handles FETCH_CONTACTS_ID_REQUEST_DONE', () => {
    //     const data = { id: 1, name: 'John' };
    //     const action = {
    //         type: FETCH_CONTACTS_ID_REQUEST_DONE,
    //         data,
    //     };

    //     const state = contactById(undefined, action);
    //     expect(state).toEqual({
    //         contact: data,
    //         loading: false,
    //         error: data,

    //     });
    // });

    it('handles FETCH_CONTACTS_ID_REQUEST_ERROR', () => {
        const action = {
            type: FETCH_CONTACTS_ID_REQUEST_ERROR,
        };

        const state = contactById(undefined, action);
        expect(state).toEqual({
            contact: [],
            loading: false,
        });
    });
});