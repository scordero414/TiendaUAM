import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface Props {
    navigation: any;
}

export const StartUp = (props: Props) => {

    const { navigation } = props;

    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('google_auth');
        if (!userData) {
            navigation.navigate('Authentication');
            return;
        }

        navigation.navigate('Dashboard');
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
