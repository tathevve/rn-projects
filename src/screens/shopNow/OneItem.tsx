/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IItem, IItemProps} from '../../shared/models/interfaces/item.interface';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux';
import {selectItemData, setItemData} from '../../redux/slicers/wishlistSlice';
import {selectItems, setItems} from '../../redux/slicers/allItemsSlice';

const OneItem = ({
  item,
  customStyles,
  showHeartIcon = false,
  showSizeAndQty = false,
}: IItemProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const wishListItemsData = useSelector(selectItemData);
  const allItemsData = useSelector(selectItems);

  const heartedItemsHandler = () => {
    const findedHeartedData = wishListItemsData.find(
      (i: IItem) => i.id === item?.id,
    );
    const findedHeartedDataInAllItems = allItemsData.find(
      (i: IItem) => i.id === item?.id,
    );

    if (findedHeartedData) {
      dispatch(
        setItemData(
          wishListItemsData.filter((i: IItem) => i.id !== findedHeartedData.id),
        ),
      );
      dispatch(
        setItems(
          allItemsData.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? {...i, isHearted: false}
              : i,
          ),
        ),
      );
    } else {
      dispatch(setItemData([...wishListItemsData, {...item, isHearted: true}]));

      dispatch(
        setItems(
          allItemsData.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? {...i, isHearted: true}
              : i,
          ),
        ),
      );
    }
  };

  return (
    <View style={styles.root}>
      {/* <Text>{brand}</Text> */}
      {showHeartIcon ? (
        <IconButton
          icon={item?.isHearted ? 'heart' : 'heart-outline'}
          style={styles.heartedStyle}
          onPress={heartedItemsHandler}
        />
      ) : null}
      <View style={[{width: '100%', ...customStyles}]}>
        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            height: 150,
          }}
          source={item?.image}
        />
        <View style={{paddingLeft: 13}}>
          <Text> {item?.season}</Text>
          {/* <Text> {item.type}</Text> */}
          <Text>{item?.brand} </Text>
          <Text>{item?.description}</Text>
          <Text>{item?.price}</Text>
          {showSizeAndQty && (
            <Text>
              Quantity: {item?.count} Size: {item?.size}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 250,
    marginTop: 45,
  },
  heartedStyle: {
    position: 'absolute',
    top: 12,
    right: 12,
    height: 22,
    width: 22,
    zIndex: 2,
  },
});

export default OneItem;
