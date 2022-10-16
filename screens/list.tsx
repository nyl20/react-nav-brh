import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/NativeStackExample";
import { globalStyles } from '../styles/global';

type mainScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

function MainScreen() {
  const navigation = useNavigation<mainScreenProp>();

  const [food, setFood] = useState([
    {
      name: 'gala apples', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped Gala apples, but they taste delicious. Not able to be sold in stores.', id: '1'
    },
    {
      name: 'broccoli', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped broccoli, but they taste delicious. Not able to be sold in stores.', id: '2'
    },
    {
      name: 'beans', price: '2', condition: 'Good',
      description: 'A can of extra beans that taste delicious. Not able to be sold in stores.', id: '3'
    },
    {
      name: 'swiss chard', price: '2', condition: 'Good',
      description: 'A basket of oddy-shaped swiss chard, but they taste delicious. Not able to be sold in stores.', id: '4'
    },
    {
      name: 'squash', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped squash, but they taste delicious. Not able to be sold in stores.', id: '5'
    },
    {
      name: 'corn', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped corn, but they taste delicious. Not able to be sold in stores.', id: '6'
    },
    {
      name: 'kale', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped kale, but they taste delicious. Not able to be sold in stores.', id: '7'
    },
  ])

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5ede4' }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={food}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', {
            randomColor: 'red', item: {
              name: item.name, price: item.price, condition: item.condition, description: item.description
            }
          })}>
            <View style={globalStyles.button}>
              <Text style={globalStyles.listTitle}>{item.name} </Text>
              <Text>{item.description}</Text>
            </View>

          </TouchableOpacity>

        )}
      />
    </View>
  );
}

export default MainScreen;

// const gStyles = StyleSheet.create({
//   button: {
//     background: '#ff4742',
//     borderRadius: 999,
//     color: 'white',
//     fontSize: 16,
//     lineHeight: 2,
//   }
// })

// export default function Home({ route, navigation }) {

//   // const pressHandler = () => {
//   //   // 2 ways to navigate between the stack screens
//   //   // navigation.navigate('Details');
//   //   navigation.push('Details');

//   // }

  // const [food, setFood] = useState([
  //   { name: 'tomato', price: '2', condition: 'Good', id: '1' },
  //   { name: 'broccoli', price: '2', condition: 'Good', id: '2' },
  //   { name: 'beans', price: '2', condition: 'Good', id: '3' },
  //   { name: 'apples', price: '2', condition: 'Good', id: '4' },
  //   { name: 'lettuce', price: '2', condition: 'Good', id: '5' },
  //   { name: 'corn', price: '2', condition: 'Good', id: '6' },
  //   { name: 'kale', price: '2', condition: 'Good', id: '7' },
  // ])

//   return (
//     <View >
//       <Text >Home Screen</Text>
//       {/* <Button title='go to food details' onPress={pressHandler} /> */}
//       <Button title="Go to Details" onPress={() => {
//         navigation.navigate("Details", {
//           randomColor: "red",
//         });
//       }} />
      // <FlatList
      //   keyExtractor={(item) => item.id}
      //   data={food}
      //   renderItem={({ item }) => (
      //     <TouchableOpacity >
      //       <Text >{item.name} </Text>
      //     </TouchableOpacity>

      //   )}
      // />
//     </View>
//   )
// }