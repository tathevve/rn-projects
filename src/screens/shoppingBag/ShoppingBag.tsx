/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {useNavigation} from '@react-navigation/native';
import OneItem from '../shopNow/OneItem';
import {
  selectBagItemsData,
  selectTotalPrice,
  setBagItemsData,
  setItemsTotalPrice,
} from '../../redux/slicers/shoppingBagSlice';
import {EPath} from '../../shared/models/enums/path.enum';
import {IconButton} from 'react-native-paper';
import ContactUs from '../../shared/ContactUs';
import {AppDispatch} from '../../redux';

const ShoppingBag = (): JSX.Element => {
  const navigation = useNavigation();
  // const wishListItemsData = useSelector(selectItemData);
  const bagItemsData = useSelector(selectBagItemsData);
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = useSelector(selectTotalPrice);
  // const [cardItems, setCardItems] = useState<number>(0);

  const removeItemFromBag = (item: IItem) => {
    const totalOf = totalPrice - Number(item.price);
    if (item.count && item.count > 1) {
      const updatedData = bagItemsData.map((i: IItem) => {
        return {
          ...i,
          count: i.count && i.id === item.id ? i.count - 1 : i.count,
        };
      });
      dispatch(setBagItemsData(updatedData));
    } else {
      const filteredItemsData = bagItemsData.filter(
        (i: IItem) => i.id !== item.id,
      );
      dispatch(setBagItemsData(filteredItemsData));
    }
    dispatch(setItemsTotalPrice(totalOf));
    console.log('asmakdam', bagItemsData);
  };

  console.log(bagItemsData, 'bagItemsData');

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
            {/* <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text> Subtotal </Text>
              <Text> {totalPrice} </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text> Shipping </Text>
              <Text> 0 </Text>
            </View> */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}> Total </Text>
              <Text style={styles.text}> {totalPrice} </Text>
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
              <View style={{display: 'flex', width: '100%'}} key={index}>
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
                  onPress={() => removeItemFromBag(item)}
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
                    count={item.count}
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
    fontWeight: 'bold',
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
