import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/MyStack";
import { globalStyles } from '../styles/global';

type mainScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

function MyOfferScreen() {
  const navigation = useNavigation<mainScreenProp>();

  const [food, setFood] = useState([
    {
      name: 'tomato', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped tomatoes, but they taste delicious. Not able to be sold in stores.', id: '1'
    },
    {
      name: 'beans', price: '1', condition: 'Acceptable',
      description: 'A can of beans, but they taste delicious. Not able to be sold in stores.', id: '2'
    },
    {
      name: 'lettuce', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped lettuce, but they taste delicious. Not able to be sold in stores.', id: '3'
    },
    {
      name: 'apples', price: '5', condition: 'Excellent',
      description: 'A basket of oddly-shaped apples, but they taste delicious. Not able to be sold in stores.', id: '4'
    },
    {
      name: 'kale', price: '4', condition: 'Excellent',
      description: 'A basket of oddly-shaped kale, but they taste delicious. Not able to be sold in stores.', id: '5'
    },
    {
      name: 'corn', price: '2', condition: 'Good',
      description: 'A basket of oddly-shaped corn, but they taste delicious. Not able to be sold in stores.', id: '6'
    },
    {
      name: 'broccoli', price: '1', condition: 'Acceptable',
      description: 'A basket of oddly-shaped broccoli, but they taste delicious. Not able to be sold in stores.', id: '7'
    },
  ])

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={globalStyles.foodHeader}>Tast of Thai</Text>
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
      <View style={globalStyles.addButton}>
        <Button title="Add a Listing" onPress={() => navigation.navigate('Add')} />
      </View>

    </View>
  );
}

export default MyOfferScreen;