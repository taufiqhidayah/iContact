import { View, Text, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

import { Formik } from 'formik';

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ActivityIndicator from './ActivityIndicatorService';
import { addContact } from '../actions/addContactAction';

export default function AddContact({ route }) {
    const item = route?.params?.item;
    const dispatch = useDispatch();
    const _handleFormSubmit = async values => {
        try {
            ActivityIndicator.setLoading(true, 'Sending...')

            // await contactApi.addContactApi(values)
            await dispatch(addContact(values))

            ActivityIndicator.setLoading(false)
            // toastersRef?.current.push({ title: 'Success', message: 'Notification successfully sent.' })
        } catch (error) {
            Alert.alert(error.name, error.message, [
                { text: 'OK', onPress: async () => await ActivityIndicator.setLoading(false) }
            ]);
        }
    }

    const isData = item ? { firstName: item.firstName, lastName: item.lastName, age: item.age, photo: item.photo }
        : { firstName: '', lastName: '', age: '', photo: '' }
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Formik
                initialValues={isData}
                onSubmit={values => {
                    // console.log(values)
                    _handleFormSubmit(values)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginTop: 20 }}>
                                {values.photo === null || values.photo === '' || values.photo === 'N/A' ? (
                                    <Avatar
                                        size="large"
                                        containerStyle={{ backgroundColor: "grey" }}
                                        rounded
                                        title={values.firstName[0]} />
                                ) : (

                                    <Avatar
                                        containerStyle={{ backgroundColor: "grey" }}
                                        size="large"
                                        rounded
                                        source={{ uri: values.photo }}
                                        title="MT" />
                                )}
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}>
                                <View
                                    style={{ width: '50%' }}
                                >
                                    <Input
                                        value={values.firstName}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        style={{ width: 10 }}
                                        placeholder='First Name'
                                        leftIcon={<Icon
                                            name='user'
                                            size={24}
                                            color='black' />} />
                                </View>

                                <View
                                    style={{ width: '50%' }}
                                >
                                    <Input
                                        value={values.lastName}
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('laseName')}
                                        style={{ width: 10 }}
                                        placeholder='Last Name' />
                                </View>
                            </View>
                            <Input
                                value={values.age.toString()}
                                onChangeText={handleChange('age')}
                                onBlur={handleBlur('age')}
                                keyboardType='numeric'
                                style={{ width: 10 }}
                                placeholder='Age'
                                leftIcon={<Icon
                                    name='calendar'
                                    size={24}
                                    color='black' />} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                            <Button
                                title="Cancel"
                                type="clear" />
                            <Button
                                onPress={handleSubmit}
                                title={item ? 'Update' : 'Add'}
                                type="clear" />
                        </View>
                    </>
                )}
            </Formik>
        </View >
    )
}