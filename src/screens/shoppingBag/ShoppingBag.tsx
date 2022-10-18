/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {MutableRefObject} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import RNButton from '../../shared/Button';
import {useNavigation} from '@react-navigation/native';

const ShoppingBag = ({
  actionSheetRef,
}: {
  actionSheetRef: MutableRefObject<any>;
}): JSX.Element => {
  const navigation = useNavigation();

  return (
    <View>
      <ActionSheet ref={actionSheetRef}>
        <View style={{width: '90%'}}>
          <View>
            <Text>SHOPPING BAG</Text>
          </View>
          <View>
            <Text>YOUR BAG IS EMPTY</Text>
          </View>
          <View>
            <Text>
              Looking for items you previously added? Sign in to pick up where
              you left off
            </Text>
          </View>
          <RNButton
            title="Sign In"
            onPress={() => {
              navigation.navigate('SignIn' as never);
            }}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default ShoppingBag;
