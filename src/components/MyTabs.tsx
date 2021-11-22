import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { User } from "../screens/Signed/User";
import { ShoppingCart } from "../screens/Signed/ShoppingCart";
import { Icon } from "native-base";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { HomePageIcon, ShoppingCartIcon, UserIcon } from "../assets/icons/TabIcons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <HomePageIcon />,
        })}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <ShoppingCartIcon />,
        })}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <UserIcon />,
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
