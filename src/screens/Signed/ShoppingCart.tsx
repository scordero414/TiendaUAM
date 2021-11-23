import React from 'react';
import {Box, HStack, Text} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ShoppingCart = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Box alignItems="center">
        <Text color="black" fontSize={20} fontWeight="bold">
          User Profile
        </Text>
      </Box>
    </SafeAreaView>
  );
};
