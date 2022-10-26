/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../redux';
import {selectItemData, setItemData} from '../../redux/slicers/wishlistSlice';

const OneItem = ({
  season,
  brand,
  price,
  description,
  image,
  id,
}: IItem): JSX.Element => {
  const [hearted, setHearted] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const wishListItemsData = useSelector(selectItemData);

  const item = {
    id,
    season,
    brand,
    price,
    description,
    image,
  };

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
        icon={hearted ? 'heart' : 'heart-outline'}
        style={{
          position: 'absolute',
          top: 7,
          right: 13,
          height: 22,
          width: 22,
          zIndex: 2,
        }}
        onPress={() => {
          setHearted(!hearted);
          dispatch(setItemData([...wishListItemsData, item]));
          console.log('Pressed', id);
        }}
      />
      <Image
        resizeMode="cover"
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
