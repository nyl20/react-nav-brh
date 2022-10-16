import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, Button, View } from "react-native";
import { CompostStack } from './CompostStack';
import { NativeStackExample } from './NativeStackExample';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type DrawerParamList = {
  HomeDrawer: undefined;
  SettingsDrawer: undefined;
}
const Drawer = createDrawerNavigator<DrawerParamList>();

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

export const DrawerNavigator = () => {
  return <Drawer.Navigator
  // screenOptions={{
  //   tabBarActiveTintColor: "tomato",
  //   tabBarInactiveTintColor: "gray",
  //   headerShown: false
  // }}
  >
    <Drawer.Screen name="HomeDrawer" component={HomeTabScreen} />
    <Drawer.Screen name="SettingsDrawer" component={SettingsTabScreen} />
  </Drawer.Navigator>
};