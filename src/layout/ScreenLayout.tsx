import {Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux';

const ScreenLayout = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>ScreenLayout</Text>
    </View>
  );
};

export default ScreenLayout;
