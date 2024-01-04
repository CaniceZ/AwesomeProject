import {useLayoutEffect} from 'react';
import {useAppSelector} from '../../hooks/useStore';
import {Text, View} from 'react-native';

function TmpScreen({navigation}) {
  const userInfo = useAppSelector(state => state.user.userInfo);
  useLayoutEffect(() => {
    if (!userInfo.accout) {
      navigation.replace('Login');
    } else {
      navigation.replace('HomeIndex');
    }
  }, [userInfo.accout]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>跳转中...</Text>
    </View>
  );
}
export default TmpScreen;
