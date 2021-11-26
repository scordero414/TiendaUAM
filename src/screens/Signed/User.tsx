import React, { useEffect } from "react";
import { Box, HStack, Icon, ScrollView, Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Props } from "../../models/props";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { logout } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Caption, Title, TouchableRipple } from "react-native-paper";
import { COLORS } from "../../resources/Constants";
import { AntDesign } from "@expo/vector-icons";
import { AddressIcon, CardsIcon, EditIcon, HistoryIcon, LogoutIcon, NotificationsIcon, WishListIcon } from "../../assets/icons/UserIcons";

export const User = (props: Props) => {
    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.user.user);

    const { navigation } = props;

    useEffect(() => {
        console.log(user);
    }, []);

    const _logoutHandler = () => {
        navigation.navigate("Auth");
        dispatch(logout());
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: user?.photoUrl,
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title
                            style={[
                                styles.title,
                                {
                                    marginTop: 15,
                                    marginBottom: 5,
                                },
                            ]}
                        >
                            {user?.givenName}
                        </Title>
                        <Caption style={styles.caption}>{user?.email}</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            {/* <Icon name="credit-card" color="#FF6347" size={25} /> */}
                            <EditIcon />
                            <Text style={styles.menuItemText}>
                                Editar perfil
                            </Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <AddressIcon />
                            <Text style={styles.menuItemText}>
                                Dirección de envío
                            </Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <WishListIcon/>
                            <Text style={styles.menuItemText}>
                                Lista de deseos
                            </Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <HistoryIcon/>
                            <Text style={styles.menuItemText}>Historial</Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <CardsIcon/>
                            <Text style={styles.menuItemText}>Tarjetas</Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <NotificationsIcon/>
                            <Text style={styles.menuItemText}>
                                Notificaciones
                            </Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>
                <TouchableRipple
                    onPress={() => {
                        _logoutHandler();
                    }}
                >
                    <View style={styles.menuItem}>
                        <HStack alignItems="center">
                            <LogoutIcon/>
                            <Text style={styles.menuItemText}>Salir</Text>
                        </HStack>
                        <AntDesign name="right" size={25} color="gray" />
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    userInfoSection: {
        marginTop: 30,
        paddingHorizontal: 30,
        marginBottom: 25,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
    },

    row: {
        flexDirection: "row",
    },

    menuWrapper: {
        marginTop: 10,
    },

    menuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuItemText: {
        color: "#777777",
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 26,
    },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   contentCenter: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   cardContainer: {
//     backgroundColor: "white",
//     width: "90%",
//     borderRadius: 10,
//     borderWidth: 2,
//     padding: 20,
//     paddingTop: 50,
//   },

//   buttonContainer: {
//     backgroundColor: "red",
//     borderRadius: 5,
//     paddingVertical: 20,
//     margin: 10,
//   },

//   buttonTextContainer: {
//     flex: 1,
//     justifyContent: "center",
//   },

//   buttonText: {
//     fontSize: 14,
//     alignSelf: "center",
//     color: "white",
//   },

//   avatarContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor: "white",
//     height: 80,
//     width: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: "black",
//     position: "absolute",
//     top: "34%",
//   },

//   avatar: {
//     height: 60,
//     width: 60,
//     borderRadius: 30,
//   },

//   text: {
//     fontSize: 16,
//   },
// });
