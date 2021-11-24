import React from "react";
import { Box, HStack, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Props } from "../../models/props";

export const User = (props: Props) => {
  const { navigation } = props;

  const _logoutHandler = () => {
    AsyncStorage.removeItem("google_auth").then();
    navigation.navigate("Auth");
  };

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
