/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RNButton from '../../shared/Button';
import {useNavigation} from '@react-navigation/native';

const ShoppingBag = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{width: '90%'}}>
        <View>
          <Text>SHOPPING BAG</Text>
        </View>
        <View>
          <Text>YOUR BAG IS EMPTY</Text>
        </View>
        <View>
          <Text>
            Looking for items you previously added? Sign in to pick up where you
            left off
          </Text>
        </View>
        <RNButton
          title="Sign In"
          onPress={() => {
            navigation.navigate('SignIn' as never);
          }}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
});

export default ShoppingBag;
