import React from 'react';
import {View, Text, Button} from 'react-native';
function OrderIndex({navigation}): React.JSX.Element {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>订单主页</Text>
      <Button
        title="跳转订单详情"
        onPress={() => navigation.navigate({name: 'OrderDetail'})}
      />
    </View>
  );
}

export default OrderIndex;
