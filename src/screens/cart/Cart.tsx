import { FlatList, IconButton, Text, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ShoeIcon } from '../../assets/icons/CategoriesIcons';
import { FooterTotal } from '../../components/FooterTotal';
import { getProducts, Product } from '../../models/product';

export const Cart = () => {

    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, []);

    const updateQuantityHandler = () => {
        // Actualizar el carrito
    }

    const removeItemHanlder = (id: string) => {
        // Actualizar el carrito
    }

    const renderCartList = () => {
        return (
            <SwipeListView
                data={products}
                contentContainerStyle={{
                    marginTop: 12,
                    paddingHorizontal: 24,
                    paddingBottom: 48
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{ height: 100, backgroundColor: "#EEE", ...styles.cartItemContainer }}
                    >

                        {/* Product image */}
                        <View
                            style={{ width: 90, height: 100, marginLeft: -10 }}
                        >
                            <Image
                                source={{ uri: data.item.image }}
                                resizeMode='contain'
                                style={{
                                    width: "100%",
                                    height: '100%',
                                    position: 'absolute'
                                }}
                            >
                            </Image>
                        </View>

                        {/* Product info */}

                        <View style={{ flex: 1}}>
                            <Text style={{ width: 80, fontSize: 16, lineHeight: 22 }}>
                                {data.item.name}
                            </Text>
                            <Text style={{ color: "#FF6C44", fontSize: 16, lineHeight: 22 }}>
                                ${data.item.price}
                            </Text>
                        </View>

                        {/* Quantity  */}
                        <InputSpinner
                            style={{ height: 40, width: 100}}
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
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'red', ...styles.cartItemContainer }}
                        icon={<ShoeIcon />}
                        onPress={() => { removeItemHanlder(data.item.name) }}

                    />


                )
                }

            >

            </SwipeListView>
        );
    }

    return (
        <SafeAreaView>
            {renderCartList()}
            <FooterTotal
                subTotal={36.9}
                shippingFee={2.78}
                total={40.5}
                onPress={() => { }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
        paddingHorizontal: 12,
        borderRadius: 12

    }
});
