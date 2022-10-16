import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/MyStack";
import { globalStyles } from '../styles/global';

type detailScreenProp = NativeStackNavigationProp<StackParamList, 'Details'>;

function AddOfferScreen() {
  const navigation = useNavigation<detailScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={globalStyles.foodHeader}>Add a Listing</Text>
      <Text style={globalStyles.promptText}>Type of food:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Beets' />
      <Text style={globalStyles.promptText}>Expiration:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. 10/20/22' />
      <Text style={globalStyles.promptText}>Condition:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Good, Excellent' />
      <Text style={globalStyles.promptText}>Price:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. $3.00' />
      <Button title="Back to My Listings" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
export default AddOfferScreen;