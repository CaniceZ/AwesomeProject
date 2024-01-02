import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native';
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 375,
  },
});
function Details({navigation}): React.JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const handleLogin = () => {
    Alert.alert('登录成功', '', [
      {
        text: '确定',
        onPress: () => navigation.replace('Home2'),
      },
    ]);
    // () => navigation.replace('Home2')
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>登录</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="请输入账号"
        placeholderTextColor="#ccc"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="请输入密码"
        placeholderTextColor="#ccc"
        textContentType="password"
        keyboardType="default"
        secureTextEntry={true}
        value={password}
      />
      <View style={{width: 250, height: 60}}>
        <Button title="登录" onPress={handleLogin} />
      </View>
    </View>
  );
}

export default Details;
