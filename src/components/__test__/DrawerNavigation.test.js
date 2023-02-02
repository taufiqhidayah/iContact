import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DrawerNavigation from '../DrawerNavigation';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/deleteContactAction';

jest.mock('react-redux', () => {
    return {
        useDispatch: jest.fn()
    };
});

jest.mock('@react-navigation/stack', () => {
    return {
        createStackNavigator: jest.fn(() => ({
            Navigator: jest.fn(({ children }) => <>{children}</>)
        }))
    };
});

jest.mock('@rneui/themed', () => {
    return {
        Input: jest.fn(({ children }) => <div>Mocked Input: {children}</div>)
    };
});

jest.mock('react-native-elements', () => {
    return {
        Avatar: jest.fn(({ children }) => <div>Mocked Avatar: {children}</div>),
        Card: jest.fn(({ children }) => <div>Mocked Card: {children}</div>),
        Icon: jest.fn(({ children }) => <div>Mocked Icon: {children}</div>),
        ListItem: jest.fn(({ children }) => <div>Mocked ListItem: {children}</div>)
    };
});

jest.mock('react-native-vector-icons/FontAwesome', () => {
    return {
        Icon: jest.fn(({ name }) => <div>Mocked Icon: {name}</div>)
    };
});
describe('DrawerNavigation', () => {
    it('dispatches deleteContact action', () => {
        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        const { getByText } = render(<DrawerNavigation />);
        fireEvent.press(getByText('Delete'));

        expect(dispatch).toHaveBeenCalledWith(deleteContact(id));
    });
});