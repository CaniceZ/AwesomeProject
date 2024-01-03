import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './app/store/index';
import HomeScreen from './app/pages/home';
import AboutScreen from './app/pages/about-me';
import { useAppSelector } from './app/hooks/useStore';

const Tab = createBottomTabNavigator();
const whileList = ['Home2', undefined]; // 不隐藏底部菜单的路由
function MyTabs() {
  const userInfo = useAppSelector(state => state.user.userInfo);
  // const tabRef = React.useRef(null)
  // React.useEffect(()=>{
  //   if([userInfo.accout]){
  //   }
  // },[userInfo.accout])
  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={({route}) => {
        const routesName = getFocusedRouteNameFromRoute(route);
        return {
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: whileList.includes(routesName) ? 'block' : 'none',
          },
        };
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '主页',
          title: '主页',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    </Provider>
  );
}
