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
    Badge,
} from "native-base";
import React, { useEffect, useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwipeListView } from "react-native-swipe-list-view";
import { ShoeIcon } from "../../assets/icons/CategoriesIcons";
import { FooterTotal } from "../../components/FooterTotal";
import { getProducts, Product } from "../../models/product";
import { COLORS } from "../../resources/Constants";
import { AntDesign } from "@expo/vector-icons";
import { Props } from "../../models/props";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAction, updateProductsAction } from "../../redux/actions";
import { CartItem } from "../../models/cartItem";
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);


export const Cart = (props: Props) => {
    const [products, setProducts] = useState<any>(null);

    const cart: CartItem[] = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(cart);
    }, [cart]);

    const updateQuantityHandler = (product: Product) => {
        // Actualizar el carrito
    };

    const closeRow = (rowMap: any, rowKey: any) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap: any, rowKey: any, id: string) => {
        closeRow(rowMap, rowKey);
        dispatch(deleteProductAction(id));
    };

    const goCheckout = () => {        
        props.navigation.navigate("Checkout");
    };

    const renderCartList = (productsData: CartItem[]) => {
        return (
            <SwipeListView
                data={productsData}
                keyExtractor={(item: any) => item.product.id}
                contentContainerStyle={{
                    marginTop: 12,
                    paddingHorizontal: 24,
                    paddingBottom: "25%",
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data: any, rowMap) => (
                    <View
                        bgColor={COLORS.DARK_WHITE}
                        height={130}
                        my={2}
                        rounded={10}
                    >
                        <View justifyContent="center">
                            <HStack space={5}>
                                <Image
                                    source={{ uri: data.item.product.image }}
                                    size="xl"
                                    resizeMode="contain"
                                    alignSelf="center"
                                    alt="img-product"
                                />
                                {/* <Text>{data.item.product.image}</Text> */}
                                <VStack justifyContent="center">
                                    <Text color={COLORS.BLACK}>
                                        {data.item.product.name}
                                    </Text>
                                    <HStack mb={3} justifyContent="space-between">
                                        <Text color={COLORS.BLUE} bold>
                                            $ {data.item.product.price}
                                        </Text>
                                        <Badge alignSelf="flex-end" colorScheme="info">{data.item.size}</Badge>
                                    </HStack>
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
                                        onChange={() =>
                                            updateQuantityHandler(data.item)
                                        }
                                    />
                                </VStack>
                            </HStack>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data: any, rowMap) => (
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
                                deleteRow(
                                    rowMap,
                                    data.item.key,
                                    data.item.product.id
                                );
                                // removeItemHanlder(data.item.product.id);
                            }}
                        />
                    </View>
                )}
            ></SwipeListView>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
            <ScrollView>{renderCartList(products)}</ScrollView>
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
                        onPress={() => goCheckout()}
                    >
                        CHECKOUT
                    </Button>
                </HStack>
            </Box>
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
