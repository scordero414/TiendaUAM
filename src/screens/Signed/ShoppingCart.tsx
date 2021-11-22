import React from 'react';
import {Box, HStack, Text} from 'native-base';

export const ShoppingCart = () => {
  return (
    <>
      <Box flex={1} alignItems='center' bgColor="white">
        <Box mt={10}>
          <Text color="black" fontSize={20} fontWeight='bold'>Shopping Cart</Text>
        </Box>
      </Box>
    </>
  );
};
