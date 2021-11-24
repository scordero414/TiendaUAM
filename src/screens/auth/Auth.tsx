import { View } from "native-base";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Google from "expo-google-app-auth";
import { CLIENT_IDS } from "../../resources/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Props } from "../../models/props";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";

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
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/bg-image.jpg")}
        blurRadius={7}
        style={styles.bgImage}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonContainer}
          onPress={() => _googleSignInHandler()}
        >
          <Image
            source={require("../../assets/img/google.png")}
            style={styles.googleIcon}
          />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },

  buttonTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 14,
    alignSelf: "center",
  },

  googleIcon: {
    height: 24,
    width: 24,
  },
});
