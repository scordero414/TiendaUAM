import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {User} from '../screens/Signed/User';
import {ShoppingCart} from '../screens/Signed/ShoppingCart';
import { Icon } from 'native-base'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <MaterialIcons size={24} name='home' />,
        })}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <MaterialIcons size={24} name='shopping-cart' />,
        })}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={() => ({
          tabBarShowLabel: false,
          tabBarIcon: () => <MaterialIcons size={24} name='person' />,
        })}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
