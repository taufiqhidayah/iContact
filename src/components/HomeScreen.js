import {
    SafeAreaView,
} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchContact } from '../actions/getContactAction';

import { Input } from '@rneui/themed';
import ListComponent from './fragment/ListComponent';
export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const contacts = useSelector(
        (state) => ({
            ...state?.contact,
        }),
        shallowEqual,
    );
    useEffect(() => {
        dispatch(fetchContact());
    }, [])

    const onRefresh = React.useCallback(() => {
        dispatch(fetchContact());
    }, []);

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            dispatch(fetchContact());
        });
        return focusHandler;
    }, [navigation]);

    return (
        <SafeAreaView style={{}}>
            <Input
                onPressIn={() => navigation.navigate('search')}
                placeholder="Search by ID"
                rightIcon={{ type: 'ionicon', name: 'search-outline' }}
            />

            {contacts?.contact && (
                <ListComponent
                    data={contacts?.contact}
                    navigation={navigation}
                    onRefresh={onRefresh}
                    loading={contacts?.loading}
                />
            )}
        </SafeAreaView >
    )
}