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
        <View>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
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
                        // onChange={(e) => dispatch(fetchContactById(e.value)) }
                        // onChange={(value ) => console.log(value)}
                        onChangeText={(value) => setSearch(value)}
                        focusable
                        autoFocus
                        placeholder='Search'
                    />

                </View>
                <Icon
                    onPress={() => dispatch(fetchContactIdById(search))}
                    name='search-outline'
                    type='ionicon'
                    style={{ marginLeft: 10 }}
                />
            </View>
            {contacts.contact && (
                <ListComponent
                    onRefresh={onRefresh}
                    data={[contacts.contact]}
                    navigation={navigation}
                    loading={contacts?.loading}

                />
            )}

        </View>
    )
}