import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import store from '../../store';
import {setUserInfo} from '../../store/user';
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 375,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
const imageUrl = require('../../assets/login_bg.jpeg');
function Login({navigation, route}): React.JSX.Element {
  // const routesName = getFocusedRouteNameFromRoute(route);
  // useLayoutEffect(() => {
  //   navigation.getParent().setOptions({
  //     tabBarStyle: {
  //       display: 'none',
  //     },
  //   });
  //   return () => {
  //     console.log(routesName, route.name, 9999);
  //     navigation.getParent().setOptions({
  //       tabBarStyle: {
  //         display: whileList.includes(routesName) ? 'block' : 'none',
  //       },
  //     });
  //   };
  // }, [navigation]);
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const handleLogin = () => {
    if (!text) {
      Alert.alert('账号不能为空');
      return;
    }
    store.dispatch(
      setUserInfo({
        accout: text,
      }),
    );
    Alert.alert('登录成功', '', [
      {
        text: '确定',
        onPress: () => navigation.replace('HomeIndex'),
      },
    ]);
    // () => navigation.replace('Home2')
  };
  return (
    <ImageBackground source={imageUrl} resizeMode="cover" style={styles.image}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'lightskyblue'}}>
          登录
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="请输入账号"
          placeholderTextColor="#888"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="请输入密码"
          placeholderTextColor="#888"
          textContentType="password"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
        />
        <View style={{width: 250, height: 60}}>
          <Button title="登录" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
