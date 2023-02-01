import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    SectionList,
    ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchContact } from '../actions/getContactAction';

import { SearchBar } from '@rneui/themed';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { Badge, FAB } from '@rneui/themed';
export default function ContactScreen({ navigation }) {
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
        setContactsData(JSON.stringify(contacts))
    }, [contacts])

    const firstData = contacts?.contact.map(val => ({
        category: val.firstName[0],
        data: val,
    }));

    const mergeData = firstData.reduce((acc, curr) => {
        const existingIndex = acc.findIndex(item => item.title === curr.category);
        if (existingIndex >= 0) {
            acc[existingIndex].data = [...acc[existingIndex].data, curr.data];
            return acc;
        }
        return [...acc, { title: curr.category, data: [curr.data] }];
    }, []);

    return (
        <SafeAreaView style={{}}>
            {contacts?.loading && (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
            {contacts?.contact && (
                <SectionList
                    sections={mergeData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <ListItem onPress={() => navigation.navigate('add', { item })} bottomDivider>
                            {item.photo === 'N/A' ? (
                                <Avatar
                                    rounded
                                    title={item.firstName[0]}
                                    containerStyle={{ backgroundColor: "grey" }}
                                />
                            ) : (
                                <Avatar
                                    rounded
                                    containerStyle={{ backgroundColor: "grey" }}
                                    source={{ uri: item.photo }}
                                />
                            )}

                            <ListItem.Content>
                                <ListItem.Title>{item.firstName + ' ' + item.lastName}</ListItem.Title>
                                <ListItem.Subtitle>Age: {item.age}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        // <Text>{item.firstName}</Text>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignContent: 'flex-start',
                            marginLeft: 20,
                            marginTop: 10,
                        }}>
                            <Text style={{
                                fontFamily: 'Nunito-SemiBold',
                                fontWeight: '300',
                            }}> {title}</Text>
                        </View>

                    )}
                />
            )}

        </SafeAreaView >
    )
}