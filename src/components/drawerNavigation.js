import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ContactScreen from './homeScreen';
import DetailContact from './detailContact';
// Initialize the Drawer navigator
import { Icon } from '@rneui/themed';
import AddContact from './addContacts';
const Stack = createStackNavigator();

function DrawerNavigation({  }) {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='home'>
                    <Stack.Screen
                        name='home'
                        component={ContactScreen}
                        options={({ navigation }) => ({
                            headerRight: () => (
                                <TouchableOpacity onPress={() => navigation.push('add')}>
                                    <Image
                                        source={require("../assets/add.png")}
                                        style={{ width: 20, height: 20, marginRight: 8 }}
                                    />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen
                        name='detail'
                        component={DetailContact} />
                    <Stack.Screen
                        name='add'
                        component={AddContact} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default DrawerNavigation;
