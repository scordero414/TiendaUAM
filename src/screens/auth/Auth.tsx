import { Box, Button, HStack, Image, View, Text} from "native-base";
import React from "react";
import * as Google from "expo-google-app-auth";
import { CLIENT_IDS, COLORS } from "../../resources/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Props } from "../../models/props";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { Fontisto } from "@expo/vector-icons";

export const Auth = (props: Props) => {
  const dispatch = useDispatch();

  const { navigation } = props;

  const _googleSignInHandler = async () => {
    try {
      const userData: any = await Google.logInAsync({
        iosClientId: CLIENT_IDS.IOS_CLIENT_ID,
        androidClientId: CLIENT_IDS.ANDROID_CLIENT_ID,
      });

      if (userData.type === "success") {
        dispatch(login(userData));
        navigation.navigate("Signed");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box flex={1} justifyContent="center" backgroundColor={COLORS.DARK_WHITE}>
      <Box
        alignSelf="center"
        alignItems="center"
        px={10}
        backgroundColor={COLORS.WHITE}
        rounded={10}
      >
        <Image
          mt={50}
          source={require("../../assets/img/Logos_UAM-08.png")}
          alt="Logo UAM"
          resizeMode="contain"
          size="2xl"
        />
        <Button
          backgroundColor={COLORS.BLUE}
          width="100%"
          my={10}
          variant="solid"
          onPress={() => _googleSignInHandler()}
          justifyContent="space-between"
        >
          <HStack alignItems="center">
            {/* <Image source={require("../../assets/img/google.png")} size="8" alt="google icon" alignSelf="flex-start" mr={5}/> */}
            <View mr={5}>
              <Fontisto name="google" size={24} color="white" />
            </View>
            <Text bold color={COLORS.WHITE}>Continue with Google</Text>
          </HStack>
        </Button>
      </Box>
    </Box>
  );
};
