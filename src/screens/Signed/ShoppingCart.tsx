import React, { useEffect } from "react";
import { Box, Button, HStack, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "../../redux/actions";

export const ShoppingCart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addProduct = () => {
    let newProduct = { id: cart.length };
    dispatch(addProductAction(newProduct));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Box alignItems="center">
        <Text color="black" fontSize={20} fontWeight="bold">
          User Profile
        </Text>
        <Button onPress={() => addProduct()}>Add Product</Button>
      </Box>
    </SafeAreaView>
  );
};
