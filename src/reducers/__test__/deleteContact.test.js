import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import deleteContact, {
    initialState,
    DELETE_CONTACTS_REQUEST_DONE,
    DELETE_CONTACTS_REQUEST_ERROR,
    DELETE_CONTACTS_REQUEST_START
} from '../deleteContact';

describe('deleteContact reducer', () => {
    it('should handle DELETE_CONTACTS_REQUEST_START', () => {
        expect(
            deleteContact(initialState, {
                type: DELETE_CONTACTS_REQUEST_START,
            }),
        ).toEqual({
            loading: false,
            error: undefined,
        });
    });

    it('should handle DELETE_CONTACTS_REQUEST_DONE', () => {
        expect(
            deleteContact(initialState, {
                type: DELETE_CONTACTS_REQUEST_DONE,
            }),
        ).toEqual({
            loading: false,
        });
    });
});