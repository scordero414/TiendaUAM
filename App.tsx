import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Signed from "./src/screens/Signed/Signed";
import { Login } from "./src/screens/Login";
import { StartUp } from "./src/screens/auth/StartUp";
import { Auth } from "./src/screens/auth/Auth";
import { Home } from "./src/screens/Home";
import { Profile } from "./src/screens/auth/Profile";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Product from "./src/screens/Product";

LogBox.ignoreLogs([
  "NativeBase: The contrast ratio of 1:1",
  "Setting a timer",
  "VirtualizedLists should never be nested",
]);
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
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        // options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>

    // <NativeBaseProvider>
    //   <Navigation />
    // </NativeBaseProvider>
  );
};

export default App;
