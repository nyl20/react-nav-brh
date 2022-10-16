import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackExample } from './examples/NativeStackExample';
import { BottomTabNavigator } from './examples/BottomTabNavigatorExample';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {/* <NativeStackExample /> */}
        <BottomTabNavigator />
        {/* <DrawerNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>

  );
}


