import { Box, Heading, HStack, Radio, Text, View, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { useSelector } from "react-redux";
import { CartItem } from "../../models/cartItem";
import { createOrder } from "../../models/order";
import { getAmountOfProductsByStock } from "../../models/product";
import { COLORS } from "../../resources/Constants";
import Address from "./Address";
import Payment from "./Payment";

const Checkout = () => {
    const [state, setState] = useState({
        isValid: false,
        errors: false,
    });

    const cart: CartItem[] = useSelector((store: any) => store.cart);

    const [allProducts, setAllProducts] = useState<any>([])
    const [order, setOrder] = useState({
        user: useSelector((state: any) => state.user.user),
        date: Date.now(),
        totalPrice: 0,
        products: [],
        state: "In Progress" // [""]
    })

    useEffect(() => {
        console.log("Carrito: " + cart.length);
        console.log(cart)
    }, []);

    useEffect(() => {
        console.log(allProducts)
        createOr();
    }, [allProducts])

    useEffect(() => {
        createOrder(order);
    }, [order])


    const onNextStep = () => {
        if (!state.isValid) {
            setState({ ...state, errors: true });
        } else {
            setState({ ...state, errors: false });
        }
    };

    const progressSteps = {
        borderWidth: 3,
        activeStepIconBorderColor: COLORS.BLUE,
        completedProgressBarColor: COLORS.BLUE,
        activeStepIconColor: COLORS.BLUE,
        activeLabelColor: COLORS.BLUE,
        completedStepNumColor: COLORS.BLUE,
        completedStepIconColor: COLORS.BLUE,
        activeStepNumColor: COLORS.WHITE,
    };
    const progressStep = {
        nextBtnText: "Siguiente",
        previousBtnText: "VOLVER",
        finishBtnText: "Finalizar",
        nextBtnStyle: styles.button,
        previousBtnStyle: styles.previousButton,
        nextBtnTextStyle: styles.buttonText,
        previousBtnTextStyle: styles.buttonTextPrevious,
    };
    const firstProgressStep = {
        ...progressStep,
        previousBtnStyle: {
            display: "none",
        },
    };

    const createOr = () => {
        const totalPrice = allProducts.reduce((sum: number, product: any ) => sum+product.price , 0);
        setOrder((old: any)=>({...old, totalPrice, products: allProducts}))

    }

    const checkout = () => {

        cart.forEach((product: any) => {
            getAmountOfProductsByStock(product).then((products: any) => {
                setAllProducts((oldProducts: any) => [...oldProducts, ...products.slice(0, product.quantity)]);
            });
            // setAllProducts(...allProducts , ...products.slice(product.quantity))
        })
        // const wqd = await getAmountOfProductsByStock()

    };

    

    return (
        <View flex={1} bg={COLORS.WHITE}>
            <ProgressSteps {...progressSteps}>
                <ProgressStep label="Envío" {...firstProgressStep}>
                    <View style={{ alignItems: "center" }}>
                        <VStack mt={5}>
                            <Radio.Group
                                defaultValue="2"
                                name="exampleGroup"
                                accessibilityLabel="select prize"
                                colorScheme="yellow"
                            >
                                <VStack mx={10} space={10}>
                                    <Box>
                                        <Heading size="md">
                                            Envío a domicilio
                                        </Heading>
                                        <HStack mt={5}>
                                            <Text width={300}>
                                                El envío se puede demorar de 3 a
                                                5 días hábiles, se cobrará el
                                                domicilio
                                            </Text>
                                            <Radio
                                                value="2"
                                                my={1}
                                                aria-label="1"
                                            />
                                        </HStack>
                                    </Box>

                                    <Box>
                                        <Heading size="md">
                                            Recoger en la tienda UAM
                                        </Heading>
                                        <HStack mt={5}>
                                            <Text width={300}>
                                                Pasa por nuestro kiosco en la
                                                Universidad Autónoma de
                                                Manizales, en el parque de los
                                                estudiantes
                                            </Text>
                                            <Radio
                                                value="3"
                                                my={1}
                                                aria-label="2"
                                            />
                                        </HStack>
                                    </Box>
                                </VStack>
                            </Radio.Group>
                        </VStack>
                    </View>
                </ProgressStep>
                <ProgressStep label="Dirección" {...progressStep}>
                    <Address />
                </ProgressStep>
                <ProgressStep
                    label="Pago"
                    {...progressStep}
                    onSubmit={() => checkout()}
                >
                    <Payment />
                </ProgressStep>
            </ProgressSteps>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.BLUE,
        paddingHorizontal: 25,
        paddingVertical: 16,
        borderRadius: 10,
    },
    previousButton: {
        borderColor: COLORS.YELLOW,
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 10,
    },
    buttonText: {
        color: COLORS.WHITE,
        fontSize: 16,
    },
    buttonTextPrevious: {
        color: COLORS.BLACK,
        fontSize: 16,
    },
});

export default Checkout;
