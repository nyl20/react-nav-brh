import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, Button, View } from "react-native";
import { CompostStack } from './CompostStack';
import { NativeStackExample } from './NativeStackExample';
import { MaterialIcons } from '@expo/vector-icons';
import { MyStack } from './MyStack';


export type BottomTabParamList = {
  Produce: undefined;
  Compost: undefined;
  Give: undefined;

}
const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab!</Text>
    </View>
  );
};

const SettingsTabScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Tab!</Text>
    </View>
  );
};

const CompostTabScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Tab!</Text>
    </View>
  );
};


export const BottomTabNavigator = () => {
  return <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
      headerShown: false
    }}
  >
    <Tab.Screen name="Produce"
      component={NativeStackExample}
      options={{
        tabBarBadge: 3,
        title: "Produce",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name='shopping-cart' size={size} color={color} />
        ),
      }}

    />
    <Tab.Screen name="Compost"
      component={CompostStack}
      options={{
        title: "Compost",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name='delete' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Give"
      component={MyStack}
      options={{
        title: "My Offers",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcons name='local-offer' size={size} color={color} />
        ),
      }}
    />

  </Tab.Navigator>
}
