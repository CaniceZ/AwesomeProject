import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 375,
  },
});
function HomeIndex({navigation}) {
  const [text, onChangeText] = useState('123');
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
          navigation.navigate({name: 'HomeDetail', params: {id: text}})
        }
      />
    </View>
  );
}

export default HomeIndex;
