import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './home/detail';
import LoginScreen from './home/login';
import HomeScreen from './home/index';
import TmpScreen from './home/tmp';
const HomeStack = createNativeStackNavigator();
function HomeStackScreen({navigation}): React.JSX.Element {
  return (
    <HomeStack.Navigator initialRouteName="TmpScreen">
      <HomeStack.Screen
        name="HomeIndex"
        component={HomeScreen}
        options={{
          title: '主页',
        }}
      />
      <HomeStack.Screen
        name="HomeDetail"
        component={DetailsScreen}
        initialParams={{id: 1}}
        options={{
          title: '主页详情',
        }}
      />
      {/* 登录页 */}
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginScreen}
      />
      {/* 中转页 app入口页 */}
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
