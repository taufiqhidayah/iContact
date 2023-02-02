import React from 'react';
import addContact from '../editContact';
import { UPDATE_CONTACTS_REQUEST_DONE, UPDATE_CONTACTS_REQUEST_ERROR, UPDATE_CONTACTS_REQUEST_START } from '../../actions/editContactAction';

describe('addContact reducer', () => {
    it('should return initial state', () => {
        expect(addContact(undefined, {})).toEqual({
            loading: false,
            error: undefined,
        });
    });

    it('should handle UPDATE_CONTACTS_REQUEST_START', () => {
        expect(
            addContact(undefined, {
                type: UPDATE_CONTACTS_REQUEST_START,
            })
        ).toEqual({
            loading: true,
            error: null,
        });
    });

    it('should handle UPDATE_CONTACTS_REQUEST_DONE', () => {
        expect(
            addContact(undefined, {
                type: UPDATE_CONTACTS_REQUEST_DONE,
            })
        ).toEqual({
            loading: false,
            error: undefined,
        });
    });

    it('should handle UPDATE_CONTACTS_REQUEST_ERROR', () => {
        expect(
            addContact(undefined, {
                type: UPDATE_CONTACTS_REQUEST_ERROR,
                error: 'An error occurred',
            })
        ).toEqual({
            loading: false,
            error: 'An error occurred',
        });
    });
});