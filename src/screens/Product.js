import { Box, Button, CheckIcon, Heading, HStack, IconButton, Image, Select, Text, useToast, View, VStack } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getAmountOfProductsByStock, getSellableProducts } from "../models/product";
import { Props } from "../models/props";
import { addProductAction } from "../redux/actions";
import { COLORS } from "../resources/Constants";

const Product = (props) => {
    const [product, setProduct] = useState(props.route.params);
    const [sellableProducts, setSellableProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sizes, setSizes] = useState([])
    const [colors, setColors] = useState([])
    const scrollA = useRef(new Animated.Value(0)).current;
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const dispatch = useDispatch()
    const cart = useSelector((store) => store.cart);

    const toast = useToast()

    useEffect(() => {
        getSellableProducts(product.id).then((arr) => setSellableProducts(arr))
    }, [])

    useEffect(() => {
        console.log(sellableProducts.length)
        const sizes = Array.from(new Set(sellableProducts.map((product) => product.size))).sort().reverse();
        
        setSizes(sizes);
        setColors(colors);

    }, [sellableProducts])


    useEffect(() => {
        setColors(Array.from(new Set(filteredProducts.map((product) => product.color))).sort())
        console.log("Filtered Products by size: ", filteredProducts.length)
    }, [filteredProducts])

    const addProduct = async () => {

        
        let currentProduct = filteredProducts.filter(product => product.color === color)[0];
        currentProduct = {...currentProduct, idParent: product.id,  name: product.name};
        const stock = await getAmountOfProductsByStock(currentProduct);
        currentProduct = {...currentProduct, stock: stock.length}

        const exits = cart.find(product => (product.name === currentProduct.name && product.size === currentProduct.size && product.color === currentProduct.color))

        !exits && dispatch(addProductAction(currentProduct))

        toast.show({
            title: !exits ? "Producto agregado" : "El producto ya está en tu carrito",
            status:  !exits ? "success" : "warning",
            description: "¡Revisa tu carrito de compras!",
            placement: "top",
        })
    }

    const filterSizes = (size) => {
        setSize(size)
        setFilteredProducts(sellableProducts.filter(product => product.size === size))
    }

    const filterColor = (color) => {
        setColor(color)
        setProduct({...product, image: filteredProducts.filter(product => product.color === color)[0].image})
    }

    return (
        <View bgColor={COLORS.DARK_WHITE} >

            <Animated.ScrollView
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>

                    <Animated.Image
                        style={styles.banner(scrollA)}
                        source={{
                            uri: product.image
                        }}
                    />
                </View>
                <Box justifyContent="center" alignItems="center" paddingTop={10} bgColor={COLORS.WHITE} roundedTop={20} pb={100}>
                    <Heading alignSelf="flex-start" ml={5}>{product.name}</Heading>

                    <HStack space={4} my={5}>
                        <HStack justifyContent="space-between"
                            alignItems="center" space={2}>
                            <Text fontSize="lg" >Talla</Text>
                            <Select
                                // selectedValue={service}
                                minWidth="20"
                                accessibilityLabel="Talla"
                                placeholder="talla"
                                _selectedItem={{
                                    bg: COLORS.BLUE,
                                    _text: {
                                        color: COLORS.WHITE
                                    },
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(itemValue) => filterSizes(itemValue)}
                            >

                                {
                                    sizes && sizes.map(item =>
                                        <Select.Item label={item} value={item} key={item}/>
                                    )
                                }

                            </Select>
                        </HStack>

                        <HStack justifyContent="space-between" alignItems="center" space={2}>
                            <Text fontSize="lg" >Color</Text>
                            <Select
                                selectedValue={product.color}
                                isDisabled={size ? false : true}
                                justifyContent="space-between"
                                minWidth="30%"
                                accessibilityLabel="Color"
                                placeholder="Color"
                                _selectedItem={{
                                    bg: COLORS.BLUE,
                                    _text: {
                                        color: COLORS.WHITE
                                    },
                                    endIcon: <CheckIcon size="5" />,

                                }}
                                mt={1}
                                onValueChange={(itemValue) => filterColor(itemValue)}
                            >
                                {
                                    colors && colors.map(item =>
                                        <Select.Item label={item} value={item} key={item}/>
                                    )
                                }
                            </Select>
                        </HStack>

                    </HStack>
                    <Heading alignSelf="flex-start" ml={5}>Descripción</Heading>
                    <Text alignSelf="flex-start" mx={5} my={3} color={COLORS.GRAY}>{product.description}</Text>

                    <Heading alignSelf="flex-start" ml={5}>Información</Heading>
                    <Text alignSelf="flex-start" mx={5} my={3} color={COLORS.GRAY}>{product.description}</Text>

                    <Heading alignSelf="flex-start" ml={5}>Precio</Heading>
                    <Text alignSelf="flex-start" mx={5} my={3} color={COLORS.GRAY}>{product.price}</Text>
                </Box>

            </Animated.ScrollView>
            <Box width="100%" height={100} bgColor={COLORS.WHITE} position="absolute" bottom={0} shadow={9} justifyContent="center">
                <HStack justifyContent="space-around">
                    <VStack>
                        <Text color={COLORS.GRAY} fontSize="md" >PRECIO</Text>
                        <Text bold color={COLORS.BLUE} fontSize="lg">$ {product.price}</Text>
                    </VStack>
                    <Button isDisabled={size && color ? false : true} variant="solid" colorScheme="yellow" bgColor={COLORS.YELLOW} px={10} _text={{ color: '#575757' }} onPress={() => addProduct()}> AGREGAR</Button>
                </HStack>
            </Box>
        </View>
    );


};

const styles = {
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden',
    },
    banner: scrollA => ({
        height: 350,
        width: '200%',
        resizeMode: 'contain',
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-350, 0, 350, 350 + 1],
                    outputRange: [-350 / 2, 0, 350 * 0.75, 350 * 0.75],
                }),
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-350, 0, 350, 350 + 1],
                    outputRange: [2, 1, 0.5, 0.5],
                }),
            },
        ],
    }),
};

export default Product;
