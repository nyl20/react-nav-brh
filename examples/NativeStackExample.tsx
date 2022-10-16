import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native";
import MainScreen from "../screens/list";
import DetailScreen from "../screens/details";

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
  }
};

const Stack = createNativeStackNavigator<StackParamList>();
const HomeScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Home">) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>
        Home Screen
      </Text>
      <Button title="Go to Details" onPress={() => {
        navigation.navigate("Details", {
          randomColor: '#F03C03', item: { name: "", price: "", condition: "", description: "" }
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
        backgroundColor: 'yellow',
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


export const NativeStackExample = () => {
  return <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={MainScreen}
      options={{ title: 'All Produce' }} />
    <Stack.Screen
      name="Details"
      component={DetailScreen}
      options={{ title: 'Details' }} />
  </Stack.Navigator>
};
