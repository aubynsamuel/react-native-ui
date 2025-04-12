import React from 'react';
import {View} from 'react-native';
import Styles from '../common/Styles';
import MyHeader from '../components/MyHeader';

export default function Screen({route, navigation}) {
  return (
    <View style={Styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
    </View>
  );
}
