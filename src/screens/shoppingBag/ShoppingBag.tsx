/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {useNavigation} from '@react-navigation/native';
import OneItem from '../shopNow/OneItem';
import {selectBagItemsData} from '../../redux/slicers/shoppingBagSlice';
import {EPath} from '../../shared/models/enums/path.enum';
import {IconButton} from 'react-native-paper';
import ContactUs from '../../shared/ContactUs';

const ShoppingBag = (): JSX.Element => {
  const navigation = useNavigation();
  // const wishListItemsData = useSelector(selectItemData);
  const bagItemsData = useSelector(selectBagItemsData);
  const [total, setTotal] = useState<number>(0);
  // const [cardItems, setCardItems] = useState<number>(0);

  useEffect(() => {
    let totalOf = 0;

    bagItemsData.forEach((element: IItem) => {
      console.log(element, 'al');
      totalOf += 1 * element?.price;
    });
    console.log(totalOf, 'asas');

    setTotal(totalOf);
  }, [bagItemsData]);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          position: 'relative',
          // height: 25,
          zIndex: 2,
          marginHorizontal: 17,
        }}>
        <IconButton
          icon="arrow-left-thin"
          // style={{
          //   height: 20,
          // }}
          size={32}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>
            SHOPPING BAG
            {bagItemsData?.length === 0 ? (
              ''
            ) : (
              <Text> ({bagItemsData.length})</Text>
            )}
          </Text>
        </View>
        {bagItemsData?.length === 0 ? (
          <View>
            <View style={styles.itemsCount}>
              <Text>{bagItemsData?.length} ITEMS</Text>
            </View>

            <View>
              <Text style={styles.text}>YOUR BAG IS EMPTY</Text>
              <Text style={styles.text}>
                When you favorite items you love, you’ll find them here
              </Text>
            </View>
          </View>
        ) : (
          <View>
            {/* {bagItemsData?.map((item: IItem) => {
              return <Text>{parseInt(item?.price + 1)}</Text>;
            })} */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text> Subtotal </Text>
              <Text> {total} </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text> Shipping </Text>
              <Text> 0 </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text> Total </Text>
              <Text> {total} </Text>
            </View>
          </View>
        )}

        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 25,
            position: 'relative',
          }}>
          {bagItemsData.map((item: IItem, index: number) => {
            return (
              <View style={{display: 'flex', width: '100%'}}>
                <IconButton
                  icon="close"
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: 30,
                    width: 30,
                    zIndex: 2,
                  }}
                  size={25}
                  onPress={() => console.log(item, 'alaooa')}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(
                      EPath.ITEMDETAILS as never,
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
                    showHeartIcon={false}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <ContactUs />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typesOfSections: {
    marginTop: 25,
    marginBottom: 13,
  },
  itemsCount: {
    marginBottom: 25,
  },
  text: {
    marginBottom: 15,
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});

export default ShoppingBag;
