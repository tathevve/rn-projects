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
  count,
  showHeartIcon = true,
}: IItem): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const wishListItemsData = useSelector(selectItemData);
  const allItemsData = useSelector(selectItems);

  const item = {
    id,
    season,
    brand,
    price,
    description,
    image,
    isHearted,
    showHeartIcon,
    count,
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

  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 250,
        marginTop: 45,
      }}>
      <Text>{brand}</Text>
      {showHeartIcon ? (
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
      ) : null}

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
      {count ? (
        <View
          style={{
            position: 'absolute',
            bottom: -30,
            right: -180,
            height: 22,
            width: 22,
            zIndex: 2,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> {count}</Text>
        </View>
      ) : null}
      <Text>{brand} </Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default OneItem;
