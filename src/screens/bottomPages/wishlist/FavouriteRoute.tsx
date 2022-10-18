/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/slicers/loginSlice';

const windowHeight = Dimensions.get('window').height;

const FavouriteRoute = ({
  addedItemCount = 0,
}: {
  addedItemCount: number;
}): JSX.Element => {
  const navigation = useNavigation();
  const loggedUserData = useSelector(selectUserData);

  console.log(loggedUserData?.name, 'aaa');

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: 'white', height: windowHeight}}>
      <View
        style={{
          marginLeft: 17,
          marginRight: 17,
        }}>
        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>WISHLIST</Text>
        </View>
        <View style={styles.itemsCount}>
          <Text>{addedItemCount} ITEMS</Text>
        </View>
        {addedItemCount === 0 ? (
          <View>
            <Text style={styles.text}>YOUR WISHLIST IS EMPTY</Text>
            {loggedUserData?.name ? (
              <Text style={styles.text}>
                When you favorite items you love, you’ll find them here
              </Text>
            ) : (
              <Text style={styles.text}>
                Looking for items you previously saved? Sign in to pick up where
                you left off
              </Text>
            )}
          </View>
        ) : null}

        {loggedUserData?.name ? (
          <RNButton
            title="Get Inspired"
            onPress={() => {
              navigation.navigate('SignIn' as never);
            }}
          />
        ) : (
          <RNButton
            title="Sign In"
            onPress={() => {
              navigation.navigate('SignIn' as never);
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typesOfSections: {
    marginTop: 25,
    marginBottom: 13,
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  itemsCount: {
    marginBottom: 25,
  },
  text: {
    marginBottom: 15,
  },
});

export default FavouriteRoute;
