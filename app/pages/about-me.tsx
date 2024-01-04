import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../hooks/useStore';
function AboutMe(): React.JSX.Element {
  const userInfo = useAppSelector(state => state.user.userInfo);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>测试react-redux-toolkit</Text>
      <Text>当前账号：{userInfo.accout}</Text>
    </View>
  );
}

export default AboutMe;
