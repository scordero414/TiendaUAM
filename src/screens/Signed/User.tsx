import React from 'react';
import {Box, HStack, Text} from 'native-base';

export const User = () => {
  return (
    <>
      <Box flex={1} alignItems='center' bgColor="white">
        <Box mt={10}>
          <Text color="black" fontSize={20} fontWeight='bold'>User Profile</Text>
        </Box>
      </Box>
    </>
  );
};
