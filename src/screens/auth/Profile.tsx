import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Props } from '../../models/props';
import { User } from '../../models/user';
import { logout } from '../../redux/actions';



export const Profile = (props: Props) => {

    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.user.user)

    const { navigation } = props;


    useEffect(() => {
        console.log(user);
    }, [])

    const _logoutHandler = () => {
        navigation.navigate('Auth');
        dispatch(logout());
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentCenter}>
                <View style={styles.cardContainer}>
                    <Text style={styles.text}>Name: {user?.name}</Text>
                    <Text style={styles.text}>Email: {user?.email}</Text>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.buttonContainer}
                        onPress={() => _logoutHandler()}
                    >
                        <View style={styles.buttonTextContainer}>
                            <Text style={styles.buttonText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {
                    user?.photoUrl
                        ?
                        <View style={styles.avatarContainer}>
                            <Image 
                                source={{ uri: user?.photoUrl }}
                                style={styles.avatarContainer}
                            />
                        </View>
                        :
                        <View style={[styles.avatar, {backgroundColor: 'AAA'}]} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    contentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        paddingTop: 50
    },

    buttonContainer: {
        backgroundColor: 'red',
        borderRadius: 5,
        paddingVertical: 20,
        margin: 10
    },

    buttonTextContainer: {
        flex: 1,
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'white'
    },

    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        height: 80,
        width: 80, 
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'black',
        position: 'absolute',
        top: '34%'
    },

    avatar: {
        height: 60,
        width: 60, 
        borderRadius: 30,
    },

    text: {
        fontSize: 16
    }
});