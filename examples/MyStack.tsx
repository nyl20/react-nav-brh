import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import MainScreen from "../screens/list";
import MyOfferScreen from "../screens/myOffers";
import DetailScreen from "../screens/details";
import MyDetailScreen from "../screens/myDetails";
import AddOfferScreen from "../screens/addListing";

export type StackParamList = {
  Home: undefined;
  Details: {
    randomColor: string;
    item: {
      name: string;
      price: string;
      condition: string;
      description: string;
    }
  };
  Add: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const MyScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Home">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>
        My Offers Screen
      </Text>
      <Button title="Go to Details" onPress={() => {
        navigation.navigate("Details", {
          randomColor: "red", item: { name: "", price: "", condition: "", description: "" }
        });
      }} />
    </SafeAreaView>

  );
};

const DetailsScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Details">) => {
  const { randomColor } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerStyle: {
        backgroundColor: randomColor,
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

const AddScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Add">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>
        My Offers Screen
      </Text>
      <Button title="Go to Details" onPress={() => {
        navigation.navigate("Details", {
          randomColor: "red", item: { name: "", price: "", condition: "", description: "" }
        });
      }} />
    </SafeAreaView>

  );
};


export const MyStack = () => {
  return <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={MyOfferScreen}
      options={{ title: 'Overview' }} />
    <Stack.Screen
      name="Details"
      component={MyDetailScreen}
      options={{ title: 'Overview' }} />
    <Stack.Screen
      name="Add"
      component={AddOfferScreen}
      options={{ title: 'Overview' }} />
  </Stack.Navigator>
};