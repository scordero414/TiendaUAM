import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Signed from "./src/screens/Signed/Signed";
import { Login } from "./src/screens/Login";
import Navigation from "./src/screens/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

LogBox.ignoreLogs(["NativeBase: The contrast ratio of 1:1", "Setting a timer"]);
// LogBox.ignoreLogs();

const Stack = createStackNavigator();

// const MyStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Signed"
//         component={Signed}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  return (
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
  );
};

export default App;
