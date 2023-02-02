import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from '../../store/index';
import HomeScreen from '../HomeScreen';

jest.mock('react-native-elements', () => {
    return {
        Avatar: jest.fn(),
        Card: jest.fn(),
        Icon: jest.fn(),
        ListItem: jest.fn()
    };
});


jest.mock('@rneui/themed', () => {
    return {
        Input: jest.fn()
    };
});

const mockNavigation = {
    navigate: jest.fn(),
    addListener: jest.fn(() => () => { })
};

describe('HomeScreen', () => {
    const store = configureStore();
    it('should render correctly', () => {
        const { queryByPlaceholderText } = render(
            <Provider store={store}>
                <HomeScreen navigation={mockNavigation} />
            </Provider>
        );

        expect(queryByPlaceholderText('Search by ID')).toBeTruthy();
    });

    it('should navigate to search screen when search icon is pressed', () => {
        const store = configureStore();

        const { getByPlaceholderText } = render(
            <Provider store={store}>
                <HomeScreen navigation={mockNavigation} />
            </Provider>
        );

        fireEvent.press(getByPlaceholderText('Search by ID'));
        expect(mockNavigation.navigate).toHaveBeenCalledWith('search');
    });
});