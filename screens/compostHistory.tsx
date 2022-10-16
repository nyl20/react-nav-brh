import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackParamList } from "../examples/CompostStack";
import { globalStyles } from '../styles/global';
import Timeline from 'react-native-timeline-flatlist';

type mainScreenProp = NativeStackNavigationProp<StackParamList, 'Home'>;

const BasicTimeLine = () => {
  const navigation = useNavigation<mainScreenProp>();
  const data = [
    {
      time: '09/22',
      title: 'Wednesday, Sept, 28, 2022 | 3:30pm',
      description: 'Horseheads Compost Facility ~10lbs of compost',
    },
    {
      time: '10/22',
      title: 'Wednesday, Oct, 5, 2022 | 3:30pm',
      description: 'Second Compost Pickup going to Indian Creek Farm.',
    },
    {
      time: '10/22',
      title: 'Wednesday, Oct, 12, 2022 | 3:30pm',
      description: 'Horseheads Compost Facility ~15lbs of compost',
    },

  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.timelineTitle}>Compost Pickup History</Text>
      <Timeline data={data} 
      circleColor = '#F03C03'
      lineColor = '#F03C03'
       />
      <View style={globalStyles.addButton}>
        <Button title="Schedule a Pickup" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
    
  )
}

export default BasicTimeLine;



// function CompostTimeScreen() {
//   const navigation = useNavigation<mainScreenProp>();

//   const [food, setFood] = useState([
//     { name: 'tomato', price: '2', condition: 'Good', id: '1' },
//     { name: 'beans', price: '1', condition: 'Acceptable', id: '2' },
//     { name: 'lettuce', price: '2', condition: 'Good', id: '3' },
//     { name: 'apples', price: '5', condition: 'Excellent', id: '4' },
//     { name: 'kale', price: '4', condition: 'Excellent', id: '5' },
//     { name: 'corn', price: '2', condition: 'Good', id: '6' },
//     { name: 'broccoli', price: '1', condition: 'Acceptable', id: '7' },
//   ])

//   return (

//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={globalStyles.foodHeader}>Tast of Thai</Text>
//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={food}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => navigation.navigate('Details', {
//             randomColor: 'red', item: {
//               name: item.name, price: item.price, condition: item.condition
//             }
//           })}>
//             <Text style={globalStyles.button}>{item.name} </Text>
//           </TouchableOpacity>

//         )}
//       />
      

//     </View>
//   );
// }

// export default CompostTimeScreen;