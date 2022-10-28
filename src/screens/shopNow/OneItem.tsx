/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux';
import {selectItemData, setItemData} from '../../redux/slicers/wishlistSlice';
import {selectItems, setItems} from '../../redux/slicers/allItemsSlice';

const OneItem = ({
  season,
  brand,
  price,
  description,
  image,
  id,
  isHearted,
}: IItem): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const wishListItemsData = useSelector(selectItemData);
  const allItemsData = useSelector(selectItems);
  // console.log(hearted, 'ws');

  const item = {
    id,
    season,
    brand,
    price,
    description,
    image,
    isHearted,
  };

  const heartedItemsHandler = () => {
    const findedHeartedData = wishListItemsData.find((i: IItem) => i.id === id);
    const findedHeartedDataInAllItems = allItemsData.find(
      (i: IItem) => i.id === id,
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

  // console.log(wishListItemsData, 'tatev');

  // console.log(wishListItemsData, 'aloo');
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
      <Text>{brand}</Text>
      <IconButton
        icon={isHearted ? 'heart' : 'heart-outline'}
        style={{
          position: 'absolute',
          top: 7,
          right: 13,
          height: 22,
          width: 22,
          zIndex: 2,
        }}
        onPress={heartedItemsHandler}
      />
      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: 150,
          // position:'absolute'
          // backgroundColor: 'gray',
        }}
        source={image}
      />
      <Text> {season}</Text>
      <Text>{brand} </Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default OneItem;
