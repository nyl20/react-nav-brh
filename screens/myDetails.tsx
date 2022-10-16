import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/MyStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from '../styles/global';

type detailScreenProp = NativeStackNavigationProp<StackParamList, 'Details'>;

// function MyDetailScreen() {
//   const navigation = useNavigation<detailScreenProp>();
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Main List Screen</Text>
//       <Text>detailScreenProp.item.name</Text>
//       <Button title="Item" onPress={() => navigation.navigate('Home')} />
//     </View>
//   )
// }
// export default MyDetailScreen;

const MyDetailScreen = ({ route, navigation }: NativeStackScreenProps<StackParamList, "Details">) => {
  const { randomColor, item } = route.params;

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
    <SafeAreaView >
      <Text style={globalStyles.foodHeader}>{item.name}</Text>
      <Text style={globalStyles.listText}> Details about this offer:</Text>
      <Text style={globalStyles.listText}> Listed Price: {item.price}</Text>
      <Text style={globalStyles.listText}> Condition: {item.condition}</Text>
      <Text style={globalStyles.listText}> Description: {item.description}</Text>
    </SafeAreaView>

  );
};

export default MyDetailScreen;