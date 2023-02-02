import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import ListComponent from '../ListComponent';

jest.mock('react-native-elements', () => {
    return {
        Avatar: jest.fn(() => null),
        Icon: jest.fn(() => null),
        ListItem: jest.fn(({ children }) => <>{children}</>),
    };
});

const data = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        photo: 'N/A',
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        photo: 'https://example.com/jane-doe.jpg',
    },
];

const navigation = { navigate: jest.fn() };
const onRefresh = jest.fn();
describe('List Component', () => {
    it('renders the component', () => {
        const data = [
            { firstName: 'John', lastName: 'Doe', age: 20, photo: 'N/A' },
            { firstName: 'Jane', lastName: 'Doe', age: 22, photo: 'https://example.com/image.jpg' },
        ]
        const navigation = { navigate: jest.fn() }
        const onRefresh = jest.fn()
        const loading = false

        const { getByText } = render(
            <ListComponent data={data} navigation={navigation} onRefresh={onRefresh} loading={loading} />
        )

        expect(getByText('John Doe')).toBeTruthy()
        expect(getByText('Age: 20')).toBeTruthy()
        expect(getByText('Jane Doe')).toBeTruthy()
        expect(getByText('Age: 22')).toBeTruthy()

        fireEvent.press(getByText('John Doe'))
        expect(navigation.navigate).toHaveBeenCalledWith('add', { item: data[0] })
    })

    it('refreshes the list', () => {
        const data = [
            { firstName: 'John', lastName: 'Doe', age: 20, photo: 'N/A' },
            { firstName: 'Jane', lastName: 'Doe', age: 22, photo: 'https://example.com/image.jpg' },
        ]
        const navigation = { navigate: jest.fn() }
        const onRefresh = jest.fn()
        const loading = false

        const { getByTestId } = render(
            <ListComponent data={data} navigation={navigation} onRefresh={onRefresh} loading={loading} />
        )

        fireEvent.pull(getByTestId('refresh-control'), { nativeEvent: { layout: { height: 100 } } })
        expect(onRefresh).toHaveBeenCalled()
    })
})