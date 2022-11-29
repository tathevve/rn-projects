/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {IconButton} from 'react-native-paper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ItemSlider from './ItemSlider';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/slicers/allItemsSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';
import ContactUs from '../../shared/ContactUs';
import {EPath} from '../../shared/models/enums/path.enum';
import RNPicker from '../../shared/Picker';
import RNAccordion from '../../shared/Accordion';
import RNButton from '../../shared/Button';
import useAddedToBagHook from '../../shared/hooks/useAddedToBagHook';
import {selectBagItemsData} from '../../redux/slicers/shoppingBagSlice';
import {EItemType} from '../../shared/models/enums/itemType.enum';

const ItemDetails = ({route}: any): JSX.Element => {
  const itemParams = route.params;
  const navigation = useNavigation();
  const items = useSelector(selectItems);
  const bagItemsData = useSelector(selectBagItemsData);
  const [pickerValue, setPickerValue] = useState<string>('');
  const addedToBagItemsHandler = useAddedToBagHook();

  useFocusEffect(
    useCallback(() => {
      setPickerValue('');
    }, []),
  );

  const findItemDetail = useMemo(() => {
    return items.find((i: IItem) => i.id === itemParams?.item?.id);
  }, [itemParams?.item, items]);

  const addToBag = (item: IItem) => {
    if (item.type !== EItemType.ONE_SIZE && !pickerValue) {
      Alert.alert('', 'Please, select your size.');
    } else {
      addedToBagItemsHandler(item, pickerValue);
    }
  };

  // console.log(findItemDetail, 'findItemDetail');

  console.log(bagItemsData, 'bagItemsData');

  const handlePickerChange = (value: any) => {
    setPickerValue(value);
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <View style={{marginHorizontal: 17}}>
          <IconButton
            icon="arrow-left-thin"
            // iconColor={MD3Colors.error50}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 30,
              width: 30,
              zIndex: 2,
            }}
            onPress={() => navigation.goBack()}
          />

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{findItemDetail.brand}</Text>
            <ItemSlider sliderData={findItemDetail.imagesArray} height={300} />
            <Text> {findItemDetail.season}</Text>
            <Text>{findItemDetail.brand} </Text>
            <Text>{findItemDetail.description}</Text>
            <Text>{findItemDetail.price}</Text>
          </View>

          <RNPicker
            pickerValue={pickerValue}
            disabled={findItemDetail?.type === EItemType.ONE_SIZE}
            onChangeCB={handlePickerChange}
          />
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: '40%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                paddingBottom: 10,
              }}
              onPress={() =>
                navigation.navigate(
                  EPath.SIZEGUIDE as never,
                  {
                    findItemDetail,
                  } as never,
                )
              }>
              <Text style={{textAlign: 'center'}}>View size guide</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '40%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                paddingBottom: 10,
                // backgroundColor: 'white',
              }}
              onPress={() => console.log('bbb')}>
              <Text style={{textAlign: 'center'}}>Size missing?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <RNAccordion accordionTitle="Size & Fit">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Composition & Care">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Delivery & Returns">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
          </View>
          <RNButton
            title="Add to bag"
            onPress={() => addToBag(findItemDetail)}
            buttonStyle={styles.button}
          />
          <ContactUs />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 45,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
});

export default ItemDetails;
