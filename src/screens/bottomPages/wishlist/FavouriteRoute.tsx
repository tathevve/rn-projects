/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/slicers/loginSlice';
import {selectItemData} from '../../../redux/slicers/wishlistSlice';
import OneItem from '../../shopNow/OneItem';
import {IItem} from '../../../shared/models/interfaces/item.interface';

const windowHeight = Dimensions.get('window').height;

const FavouriteRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const loggedUserData = useSelector(selectUserData);
  const wishListItemsData = useSelector(selectItemData);

  console.log(loggedUserData?.name, 'aaa');
  console.log(wishListItemsData, 'aloalo');

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
          <Text>{wishListItemsData?.length} ITEMS</Text>
        </View>
        {wishListItemsData?.length === 0 ? (
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
        ) : (
          <View
            style={{
              width: '100%',
              paddingBottom: 100,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {wishListItemsData.map((item: IItem, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      'ItemDetails' as never,
                      {
                        item,
                      } as never,
                    )
                  }
                  key={index}
                  style={{
                    width: '50%',
                    // flexWrap: 'wrap',
                  }}>
                  <OneItem
                    id={item.id}
                    season={item.season}
                    image={item.image}
                    brand={item.brand}
                    description={item.description}
                    price={item.price}
                    isHearted={item.isHearted}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {loggedUserData?.name ? null : (
          <RNButton
            title="Sign In"
            onPress={() => {
              navigation.navigate('SignIn' as never);
            }}
            buttonStyle={styles.button}
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

export default FavouriteRoute;
