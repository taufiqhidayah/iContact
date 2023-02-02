import React from 'react'
import { View, Alert } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { useDispatch } from "react-redux";

// Initialize the Drawer navigator
import { Icon } from '@rneui/themed';
import AddContact from './AddContacts';
import { deleteContact } from '../actions/deleteContactAction';
import SearchScreen from './SearchScreen';
const Stack = createStackNavigator();

function DrawerNavigation({ }) {
    const dispatch = useDispatch();
    const createTwoButtonAlert = (navigation, id) =>
        Alert.alert('Confirmation ', 'Are you sure you want to delete?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete', onPress: () => {
                    dispatch(deleteContact(id))
                    navigation.navigate('home')
                }
            },
        ]);
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='home'

                    screenOptions={{
                        headerTitleStyle: {
                            color: '#fff',
                        },
                        headerStyle: {
                            backgroundColor: '#00a4d3',
                        },
                    }}
                >
                    <Stack.Screen
                        name='home'
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: 'Home',
                            headerRight: () => (
                                <Icon
                                    style={{ paddingRight: 20 }}
                                    name='add-outline'
                                    type='ionicon'
                                    color={'#fff'}
                                    onPress={() => navigation.push('add')}
                                />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name='add'
                        component={AddContact}
                        options={({ navigation, route }) => ({
                            headerRight: () => {
                                const item = route.params?.item;
                                return (
                                    item && (
                                        <View style={{ paddingRight: 20, flexDirection: 'row' }}>
                                            <Icon
                                                color={'#fff'}
                                                name='ios-trash'
                                                type='ionicon'
                                                // onPress={() => dispatch(deleteContact(item.id))}
                                                onPress={() => createTwoButtonAlert(navigation, item.id)}
                                            />
                                        </View>
                                    )
                                );
                            },
                            headerTintColor: '#fff',
                            headerTitle: route.params?.item ? 'Edit Contact' : 'Add Contact',
                        })}
                    />
                    <Stack.Screen
                        name='search'
                        component={SearchScreen}
                        options={{ headerShown: false, headerTintColor: '#fff', }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default DrawerNavigation;
