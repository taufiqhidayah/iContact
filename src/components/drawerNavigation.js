import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './homeScreen';
import DetailContact from './detailContact';
// Initialize the Drawer navigator
const Stack = createStackNavigator();

function DrawerNavigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='home'>
                    <Stack.Screen
                        name='home'
                        component={HomeScreen} />
                    <Stack.Screen
                        name='detail'
                        component={DetailContact} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default DrawerNavigation;
