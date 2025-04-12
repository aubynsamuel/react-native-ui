import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {colors} from './drawer/constant';

export default function DrawerScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
