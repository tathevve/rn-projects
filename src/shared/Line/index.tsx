import {View, StyleSheet} from 'react-native';
import React from 'react';

const Line = () => {
  return (
    <View style={styles.lineStyle}>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginTop: 20,
  },
});

export default Line;
