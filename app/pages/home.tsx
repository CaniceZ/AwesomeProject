import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './details';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeStack = createNativeStackNavigator();
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>主页!21</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate({name: 'Details', params: {id: 13}})}
      />
    </View>
  );
}

function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          title: '外卖'
        }}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} initialParams={{ id: 1 }}/>
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
