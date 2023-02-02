import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import SearchScreen from '../SearchScreen'

import { Provider } from 'react-redux';
import store from '../../store/index';

jest.mock('@react-navigation/native', () => {
    return {
        useNavigation: jest.fn()
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

describe('SearchScreen', () => {
    it('renders correctly', async () => {
        const navigation = { goBack: jest.fn() }
        const { getByPlaceholderText, getByTestId } = render(
            <Provider store={store}>
                <SearchScreen navigation={navigation} />
            </Provider>)
        const input = getByPlaceholderText('Search')
        const searchIcon = getByTestId('search-icon')
        expect(input).toBeTruthy()
        expect(searchIcon).toBeTruthy()
    });

    it('calls goBack function on back arrow icon press', async () => {
        const navigation = { goBack: jest.fn() }
        const { getByTestId } = render(
            <Provider store={store}>
                <SearchScreen navigation={navigation} />
            </Provider>)
        const backArrowIcon = getByTestId('back-arrow-icon')
        fireEvent.press(backArrowIcon)
        expect(navigation.goBack).toHaveBeenCalled()
    })

    it('dispatches fetchContactIdById action on search icon press', async () => {
        const dispatch = jest.fn()
        const navigation = { goBack: jest.fn() }
        const { getByPlaceholderText, getByTestId } = render(<Provider store={store}>
            <SearchScreen dispatch={dispatch} navigation={navigation} /></Provider>)
        const input = getByPlaceholderText('Search')
        const searchIcon = getByTestId('search-icon')
        fireEvent.changeText(input, 'test')
        fireEvent.press(searchIcon)
        expect(dispatch).toHaveBeenCalledWith(fetchContactIdById('test'))
    })
});