/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {IconButton} from 'react-native-paper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {IItem} from '../../shared/models/interfaces/item.interface';
import ContactUs from '../../shared/ContactUs';
import {EPath} from '../../shared/models/enums/path.enum';
import RNPicker from '../../shared/Picker';
import RNAccordion from '../../shared/Accordion';
import RNButton from '../../shared/Button';
import useAddedToBagHook from '../../shared/hooks/useAddedToBagHook';
import {EItemType} from '../../shared/models/enums/itemType.enum';
import RNModal from '../../shared/Modal';
import OneItem from '../shopNow/OneItem';
import {AppDispatch} from '../../redux';
import {selectItemData, setItemData} from '../../redux/slicers/wishlistSlice';
import {selectUserData} from '../../redux/slicers/loginSlice';
import {
  selectRecommendItems,
  setItem,
} from '../../redux/slicers/recommendSlice';
import {recommendedDataList} from './recommendedDataList';
import {useScrollToTop} from '@react-navigation/native';

const ItemDetails = ({route}: any): JSX.Element => {
  const itemParams = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const [pickerValue, setPickerValue] = useState<string>('');
  const items = useSelector(selectRecommendItems);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addedToBagItemsHandler = useAddedToBagHook();
  const wishListItemsData = useSelector(selectItemData);
  const loggedUserData = useSelector(selectUserData);
  const [recommendedData, setRecommendedData] = useState(recommendedDataList);
  const scrollRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
    }, [scrollRef]),
  );

  useFocusEffect(
    useCallback(() => {
      setPickerValue('');
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      if (itemParams?.item) {
        setRecommendedData(
          recommendedDataList.filter(item => item.id !== itemParams?.item?.id),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemParams?.item]),
  );

  const findItemDetail = useMemo(() => {
    return items.find((i: IItem) => i.id === itemParams?.item?.id);
  }, [itemParams?.item, items]);

  const addToBag = (item: IItem) => {
    if (item.type !== EItemType.ONE_SIZE && !pickerValue) {
      Alert.alert('', 'Please, select your size.');
    } else {
      addedToBagItemsHandler(item, pickerValue);
      setIsOpen(true);
    }
  };

  const handlePickerChange = (value: any) => {
    setPickerValue(value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleContinueBtnPress = () => {
    if (loggedUserData) {
      navigation.navigate(EPath.SHOPPINGBAG as never);
    } else {
    }
    handleCloseModal();
  };

  const heartedItemsHandler = () => {
    const findedHeartedData = wishListItemsData.find(
      (i: IItem) => i.id === itemParams?.item?.id,
    );
    const findedHeartedDataInAllItems = items.find(
      (i: IItem) => i.id === itemParams?.item?.id,
    );

    if (findedHeartedData) {
      dispatch(
        setItemData(
          wishListItemsData.filter((i: IItem) => i.id !== findedHeartedData.id),
        ),
      );
      dispatch(
        setItem(
          items.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? {...i, isHearted: false}
              : i,
          ),
        ),
      );
    } else {
      dispatch(
        setItemData([
          ...wishListItemsData,
          {...itemParams.item, isHearted: true},
        ]),
      );

      dispatch(
        setItem(
          items.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? {...i, isHearted: true}
              : i,
          ),
        ),
      );
    }
  };

  useEffect(() => {
    scrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [itemParams]);

  return (
    <>
      <ScrollView
        ref={scrollRef}
        style={{
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <View style={{marginHorizontal: 17}}>
          <IconButton
            icon="arrow-left-thin"
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
            <IconButton
              icon={findItemDetail?.isHearted ? 'heart' : 'heart-outline'}
              style={styles.heartedStyle}
              onPress={heartedItemsHandler}
            />
            <Text>{findItemDetail?.brand}</Text>
            <Image
              resizeMode="contain"
              style={{
                width: '100%',
                height: 300,
              }}
              // source={require(`../../../assets/${item}`)}
              // source=  {{uri: item} as any}
              source={findItemDetail?.image}
              // source={require(item)}
            />
            <Text> {findItemDetail?.season}</Text>
            <Text>{findItemDetail?.brand} </Text>
            <Text>{findItemDetail?.description}</Text>
            <Text>{findItemDetail?.price}</Text>
          </View>

          <RNPicker
            pickerValue={pickerValue}
            disabled={findItemDetail?.type === EItemType.ONE_SIZE}
            onChangeCB={handlePickerChange}
          />
          {/* <View
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
                    item: findItemDetail,
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
          </View> */}
          <View>
            <RNAccordion accordionTitle="Size & Fit">
              <Text>
                The product is designed to provide a flattering and comfortable
                fit for various body types. We recommend referring to the size
                chart below to find your perfect fit.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Composition & Care">
              <Text>
                The product is expertly crafted from a high-quality blend of 95%
                polyester and 5% spandex. The polyester fabric offers durability
                and wrinkle-resistance, while the addition of spandex ensures a
                comfortable stretch and flexibility.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Delivery & Returns">
              <Text>
                We want you to be completely satisfied with your dress. If, for
                any reason, you are not happy with your purchase, we offer a
                hassle-free return and exchange policy.
              </Text>
            </RNAccordion>
          </View>
          <View
            style={{
              width: '100%',
              // paddingBottom: 100,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/* {findItemDetail?.imagesArray?.map((item: IItem, index: number) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    navigation.navigate(
                      EPath.ITEMDETAILS as never,
                      {
                        item,
                      } as never,
                    )
                  }>
                  <View
                    style={{
                      width: '50%',
                    }}>
                    <OneItem item={item} recommendedId={item.id} />
                  </View>
                </TouchableWithoutFeedback>
              );
            })} */}
            {recommendedData
              .filter(i => i.keyWord === itemParams?.item?.keyWord)
              .slice(0, 5)
              .map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() =>
                      navigation.navigate(
                        EPath.ITEMDETAILS as never,
                        {
                          item,
                        } as never,
                      )
                    }>
                    <View
                      style={{
                        width: '50%',
                      }}>
                      <OneItem item={item} recommendedId={item.id} />
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
          </View>
          <RNButton
            title="Add to bag"
            onPress={() => addToBag(findItemDetail)}
            buttonStyle={styles.button}
            textStyle={styles.textBtn}
          />
          <ContactUs />
        </View>
      </ScrollView>
      {loggedUserData ? (
        isOpen && (
          <RNModal
            visible={isOpen}
            hideModal={handleCloseModal}
            modalTitle="Added to Bag">
            <View>
              <View style={{width: '50%'}}>
                <OneItem item={findItemDetail} customStyles={styles.item} />
              </View>
              <View>
                <RNButton
                  title="Go to bag"
                  onPress={handleContinueBtnPress}
                  buttonStyle={styles.button}
                  textStyle={styles.textBtn}
                />
              </View>
            </View>
          </RNModal>
        )
      ) : (
        <RNModal
          visible={isOpen}
          hideModal={() => setIsOpen(false)}
          modalTitle="Please, sign in to see your bag.">
          <View>
            <View>
              <RNButton
                title="Sign In"
                onPress={() => {
                  navigation.navigate(EPath.SIGNIN as never);
                  handleCloseModal();
                }}
                buttonStyle={styles.button}
                textStyle={styles.textBtn}
              />
            </View>
          </View>
        </RNModal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 45,
    borderStyle: 'solid',
    marginBottom: 15,
  },
  textBtn: {color: 'white'},
  item: {
    flexDirection: 'row',
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

export default ItemDetails;
