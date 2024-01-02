import React from 'react';
import {View, Text, Button} from 'react-native';

function Details({route, navigation}): React.JSX.Element {
  const { id } = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
      <Text>详情!</Text>
      <Text>id: {JSON.stringify(id)}</Text>
      <Button title="返回" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Details;
