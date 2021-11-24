import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Signed from "./src/screens/Signed/Signed";
import { Login } from "./src/screens/Login";
<<<<<<< HEAD
import { StartUp } from "./src/screens/auth/StartUp";
import { Auth } from "./src/screens/auth/Auth";
import { Home } from "./src/screens/Home";
=======
import Navigation from "./src/screens/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
>>>>>>> f413dfa3d761038d36f53d2f6033cf27656456b1

LogBox.ignoreLogs(["NativeBase: The contrast ratio of 1:1", "Setting a timer", 'VirtualizedLists should never be nested']);
// LogBox.ignoreLogs();

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="StartUp">
      <Stack.Screen
        name="StartUp"
        component={StartUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signed"
        component={Signed}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
<<<<<<< HEAD
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>

    // <NativeBaseProvider>
    //   <Navigation />
    // </NativeBaseProvider>
=======
    // <NativeBaseProvider>
    //   <NavigationContainer>
    //     <MyStack />
    //   </NavigationContainer>
    // </NativeBaseProvider>

    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
>>>>>>> f413dfa3d761038d36f53d2f6033cf27656456b1
  );
};

export default App;
