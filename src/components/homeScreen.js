import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchContact } from '../actions/contactAction';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const [contactData, setContactsData] = useState([])

    const contacts = useSelector(
        (state) => ({
            ...state?.contact,
        }),
        shallowEqual,
    );
    useEffect(() => {
        dispatch(fetchContact());
    }, [])

    useEffect(() => {
        setContactsData(contacts)
    }, [contacts])


    console.log(JSON.stringify(contacts), 'lala', typeof contacts)

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View >
    )
}