import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Props } from '../../models/props';


export const StartUp = (props: Props) => {

    const { navigation } = props;

    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('google_auth');

        if (!userData) {
            navigation.navigate('Auth');
            return;
        }

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
