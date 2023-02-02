import { View, Text } from 'react-native'
import React from 'react'
import { Icon, Input } from 'react-native-elements'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchContactIdById } from '../actions/getContactByIdAction';
import ListComponent from './fragment/ListComponent';

export default function SearchScreen({ navigation }) {
    const dispatch = useDispatch();
    const [search, setSearch] = React.useState('');
    const contacts = useSelector(
        (state) => ({
            ...state?.contactById,
        }),
        shallowEqual,
    );
    const onRefresh = React.useCallback(() => {
        console.log(time)
    }, []);

    console.log(contacts.contact, 'contact')
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <View>
                    <Icon
                        onPress={() => navigation.goBack()}
                        name='arrow-back-outline'
                        type='ionicon'
                        style={{ marginLeft: 10 }}
                    />
                </View>
                <View style={{ width: '85%', marginTop: 20 }}>
                    <Input
                        onChangeText={(value) => setSearch(value)}
                        focusable
                        placeholder='Search by ID'
                    />

                </View>
                <Icon
                    onPress={() => dispatch(fetchContactIdById(search))}
                    name='search-outline'
                    type='ionicon'
                    style={{ marginLeft: 10 }}
                />
            </View>
            {contacts?.contact?.id && (
                <ListComponent
                    onRefresh={onRefresh}
                    data={[contacts?.contact]}
                    navigation={navigation}
                    loading={contacts?.loading}

                />
            )}

            {contacts?.error?.message && !contacts?.contact?.id && (
                <Text style={{ marginLeft: 20, color: '#000' }}>{contacts?.error?.message}</Text>
            )}


        </View>
    )
}