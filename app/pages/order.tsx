import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderIndexScreen from './order/index';
import OrderDetailScreen from './order/detail';
const OrderStack = createNativeStackNavigator();
function OrderStackScreen(): React.JSX.Element {
  return (
    <OrderStack.Navigator initialRouteName="OrderIndex">
      <OrderStack.Screen
        name="OrderIndex"
        component={OrderIndexScreen}
        options={{
          title: '订单',
        }}
      />
      <OrderStack.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          title: '订单详情',
        }}
      />
    </OrderStack.Navigator>
  );
}

export default OrderStackScreen;
