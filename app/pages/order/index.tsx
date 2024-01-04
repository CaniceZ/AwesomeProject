import React from 'react';
import {View, Text, Button} from 'react-native';
import {request} from '../../utils/request';
function OrderIndex({navigation}): React.JSX.Element {
  const handleFetch = () => {
    request('/getOrderList?type=3').then(res => {
      console.log(res);
    });
  };
  const handleFetch2 = () => {
    request('/addOrder', 'POST', {orderName: 'paaaa'}).then(res => {
      console.log(res);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text>订单主页</Text>
      <Button
        title="跳转订单详情"
        onPress={() => navigation.navigate({name: 'OrderDetail'})}
      />
      <Button title="测试GET请求" onPress={handleFetch} />
      <Button title="测试POST请求" onPress={handleFetch2} />
    </View>
  );
}

export default OrderIndex;
