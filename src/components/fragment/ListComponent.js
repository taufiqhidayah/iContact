import {
    View,
    Text,
    SectionList,
    RefreshControl,
} from 'react-native'
import React from 'react'

import { Avatar, Icon, ListItem } from 'react-native-elements';
export default function ListComponent({ data, navigation, onRefresh, loading }) {

    const firstData = data.map(val => ({
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

    const sortByTitle = mergeData.sort((a, b) => a.title.localeCompare(b.title));
    return (
        <SectionList
            refreshControl={
                <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            sections={sortByTitle}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <ListItem style={{ marginTop: 1 }} onPress={() => navigation.navigate('add', { item })} bottomDivider>
                    {item.photo !== 'N/A' ? (
                        <Avatar
                            rounded
                            containerStyle={{ backgroundColor: "grey" }}
                            source={{ uri: item?.photo || 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
                        />
                    ) : (

                        <Avatar
                            rounded
                            title={item.firstName[0]}
                            containerStyle={{ backgroundColor: "grey" }}
                        />
                    )}

                    <ListItem.Content>
                        <ListItem.Title>{item.firstName + ' ' + item.lastName}</ListItem.Title>
                        <ListItem.Subtitle>Age: {item.age}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Icon name="chevron-right" />
                </ListItem>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 10
                }}>
                    <Text style={{
                        fontFamily: 'Nunito-SemiBold',
                        fontWeight: '300',
                    }}> {title}</Text>
                </View>

            )}
        />
    )
}