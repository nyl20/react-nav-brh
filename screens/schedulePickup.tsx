import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/MyStack";
import { globalStyles } from '../styles/global';

type detailScreenProp = NativeStackNavigationProp<StackParamList, 'Details'>;

function ScheduleScreen() {
  const navigation = useNavigation<detailScreenProp>();
  return (
    <View >
      <Text style={globalStyles.foodHeader}>Organic Waste Pickup</Text>
      <Text style={globalStyles.promptText}>Support local farms, food pantries, and compost facilities by offering your excess food</Text>
      <Text style={globalStyles.promptText}>Location at pickup*:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Beets' />
      <Text style={globalStyles.promptText}>Organic Ingredients:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Beets' />
      <Text style={globalStyles.promptText}>Amount at pickup:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Beets' />
      <Text style={globalStyles.promptText}>Date of pickup:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder='e.g. Beets' />
      {/* <Button title="Back to My Listings" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  )
}
export default ScheduleScreen;