import React, {useLayoutEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './details';
import LoginScreen from './login';
import {useAppSelector} from '../hooks/useStore';
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
function TmpScreen({navigation}) {
  const userInfo = useAppSelector(state => state.user.userInfo);
  useLayoutEffect(() => {
    if(!userInfo.accout){
      navigation.replace('Login');
    }else{
      navigation.replace('Home2');
    }
   
  }, [userInfo.accout]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>中转页!</Text>
    </View>
  );
}
function HomeStackScreen({navigation}): React.JSX.Element {
  return (
    <HomeStack.Navigator initialRouteName="TmpScreen">
      <HomeStack.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          title: '主页',
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
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="TmpScreen"
        component={TmpScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
