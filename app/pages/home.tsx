import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './details';
import LoginScreen from './login';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeStack = createNativeStackNavigator();
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 375,
  },
});
function HomeScreen({navigation}) {
  const [text, onChangeText] = React.useState('123');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>主页!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        title="带参跳转到详情"
        onPress={() =>
          navigation.navigate({name: 'Details', params: {id: text}})
        }
      />
    </View>
  );
}

function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStack.Navigator initialRouteName="Login">
      <HomeStack.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          title: '外卖',
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{id: 1}}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
