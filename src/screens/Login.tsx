import { Button, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const Login = (props: any) => {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Text>Iniciar Sesion</Text>
      <Button onPress={() => navigation.navigate("Signed")}>Go signed</Button>
    </SafeAreaView>
  );
};
