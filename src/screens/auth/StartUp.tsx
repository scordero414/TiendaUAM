import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { Props } from '../../models/props';
import { login } from '../../redux/actions';


export const StartUp = (props: Props) => {

    const dispatch = useDispatch();

    const { navigation } = props;

    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('google_auth');

        if (!userData) {
            navigation.navigate('Auth');
            return;
        }

        dispatch(login(JSON.parse(userData)));
        navigation.navigate('Signed');
    };

    tryLogin().then();

    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'blue'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
