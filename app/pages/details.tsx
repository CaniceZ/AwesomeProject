import React from 'react';
import {View, Text, Button} from 'react-native';

function Details({route, navigation}): React.JSX.Element {
  const { id } = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DetailsDetailsDetails!</Text>
      <Text>id: {JSON.stringify(id)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Details;
