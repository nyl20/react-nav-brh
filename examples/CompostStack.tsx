import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import MainScreen from "../screens/list";
import DetailScreen from "../screens/details";
import BasicTimeLine from "../screens/compostHistory";
import ScheduleScreen from "../screens/schedulePickup";

export type StackParamList = {
  Home: undefined;
  Details: undefined;
};

const ComStack = createNativeStackNavigator<StackParamList>();
const CompostScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Home">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>
        Compost Screen
      </Text>
      <Button title="Go to Details" onPress={() => {
        navigation.navigate("Details");
      }} />
    </SafeAreaView>

  );
};

const DetailsScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Details">) => {
  // const { randomColor } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor: 'red',
      }
    });
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>
        Details Screen
      </Text>
    </SafeAreaView>

  );
};


export const CompostStack = () => {
  return <ComStack.Navigator initialRouteName="Home">
    <ComStack.Screen
      name="Home"
      component={BasicTimeLine}
      options={{ title: 'Compost' }} />
    <ComStack.Screen
      name="Details"
      component={ScheduleScreen}
      options={{ title: 'More Details' }} />
  </ComStack.Navigator>
};
