/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import OneItem from './OneItem';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
// import {IItem} from '../../shared/models/interfaces/item.interface';
import {EPath} from '../../shared/models/enums/path.enum';
import LeftMenu from '../../shared/LeftMenu';
import {selectRecommendItems} from '../../redux/slicers/recommendSlice';
// import * as All  from '../../../assets/photos_without_duplicates';

const AllItems = (): JSX.Element => {
  const navigation = useNavigation();
  const items = useSelector(selectRecommendItems);
  const [dataImg, setDataImg] = useState([]);

  useEffect(() => {
    fetch(
      'http://10.0.2.2:5000/find_similar?n_similar=10&image_name=photos_without_duplicates/beachwear_1_45.png',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setDataImg(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const imagesList = useMemo(() => {
  //   return dataImg.length > 0
  //     ? dataImg.map((item, index) => {
  //         return {
  //           imgName: index,
  //           uri: All[`${item}`],
  //           season: 'New Season',
  // // brand: 'Heritage',
  // // price: 400,
  // // count: 0,
  // // description: 'Ring-Chain Bracelet "Vaspurakan"',
  // // image: image1,
  // // type: EItemType.CLOTHING,
  // // size:ESize.ONE_SIZE,
  // // isHearted: false,
  //         };
  //       })
  //     : [];
  // }, [dataImg]);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <View
          style={{
            position: 'relative',
            height: 77,
            zIndex: 2,
          }}>
          <IconButton
            icon="arrow-left-thin"
            style={{
              position: 'absolute',
              top: 0,
              left: 20,
              // right: 0,
              height: 30,
              width: 30,
              zIndex: 2,
            }}
            size={32}
            onPress={() => navigation.goBack()}
          />
          <LeftMenu />
        </View>
        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {items.length > 0 &&
            items?.map((item: string, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(EPath.ITEMDETAILS, {
                      item,
                    })
                  }
                  key={index}
                  style={{
                    width: '50%',
                    // flexWrap: 'wrap',
                  }}>
                  <OneItem item={item} showHeartIcon />
                </TouchableOpacity>
              );
            })}
          {/* {imagesList.length > 0 &&
            imagesList.map(item => {
              return (
                <TouchableOpacity
                  key={item.imgName}
                  style={{
                    width: '50%',
                    // flexWrap: 'wrap',
                  }}>
                  <OneItem item={item} showHeartIcon />
                </TouchableOpacity>
              );
            })} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllItems;
