import {
    FlatList,
    HStack,
    IconButton,
    Text,
    View,
    VStack,
    Image,
    Box,
    Button,
    ScrollView,
} from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeListView } from "react-native-swipe-list-view";
import { ShoeIcon } from "../../assets/icons/CategoriesIcons";
import { FooterTotal } from "../../components/FooterTotal";
import { getProducts, Product } from "../../models/product";
import { COLORS } from "../../resources/Constants";
import { AntDesign } from "@expo/vector-icons";

export const Cart = () => {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    const updateQuantityHandler = () => {
        // Actualizar el carrito
    };

    const removeItemHanlder = (id: string) => {
        // Actualizar el carrito
    };

    const renderCartList = () => {
        return (
            <SwipeListView
                data={products}
                contentContainerStyle={{
                    marginTop: 12,
                    paddingHorizontal: 24,
                    paddingBottom: 95,
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        bgColor={COLORS.DARK_WHITE}
                        height={130}
                        my={2}
                        rounded={10}
                    >
                        <View justifyContent="center">
                            <HStack space={5}>
                                <Image
                                    source={{ uri: data.item.image }}
                                    size="xl"
                                    resizeMode="contain"
                                    alignSelf="center"
                                    alt="img-product"
                                />
                                <VStack justifyContent="center">
                                    <Text color={COLORS.BLACK}>
                                        {data.item.name}
                                    </Text>
                                    <Text color={COLORS.BLUE} mb={3} bold>
                                        $ {data.item.price}
                                    </Text>
                                    <InputSpinner
                                        skin="clean"
                                        height={30}
                                        width={110}
                                        max={5}
                                        min={1}
                                        step={1}
                                        color={"#DDD"}
                                        colorMax={"#f04048"}
                                        colorMin={"#40c5f4"}
                                        value={2}
                                        rounded={false}
                                        showBorder={true}
                                        onChange={updateQuantityHandler}
                                    />
                                </VStack>
                            </HStack>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View
                        bgColor="#f04048"
                        height={130}
                        my={2}
                        rounded={10}
                        justifyContent="center"
                        alignItems="flex-end"
                    >
                        <IconButton
                            mr={4}
                            icon={
                                <AntDesign
                                    name="delete"
                                    size={32}
                                    color="white"
                                />
                            }
                            onPress={() => {
                                removeItemHanlder(data.item.name);
                            }}
                        />
                    </View>
                )}
            ></SwipeListView>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
            <VStack bgColor={COLORS.WHITE} space={10}>
                <ScrollView>
                    {renderCartList()}
                </ScrollView>
                {/* <FooterTotal
                    subTotal={36.9}
                    shippingFee={2.78}
                    total={40.5}
                    onPress={() => {}}
                /> */}
                <Box
                    width="100%"
                    height={100}
                    bgColor={COLORS.WHITE}
                    position="absolute"
                    bottom={0}
                    shadow={9}
                    justifyContent="center"
                >
                    <HStack justifyContent="space-around">
                        <VStack>
                            <Text color={COLORS.GRAY} fontSize="md">
                                TOTAL
                            </Text>
                            <Text bold color={COLORS.BLUE} fontSize="lg">
                                $ 26000
                            </Text>
                        </VStack>
                        <Button
                            variant="solid"
                            colorScheme="yellow"
                            bgColor={COLORS.YELLOW}
                            px={10}
                            _text={{ color: "#575757" }}
                        >
                            CHECKOUT
                        </Button>
                    </HStack>
                </Box>
            </VStack>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    cartItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
});
